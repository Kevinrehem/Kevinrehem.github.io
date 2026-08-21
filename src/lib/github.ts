export async function getGitHubStats(username: string) {
  const token = process.env.GH_STATS_PAT;
  if (!token) {
    console.warn("No GH_STATS_PAT provided. Returning default stats.");
    return null;
  }

  const query = `
    query userInfo($login: String!) {
      user(login: $login) {
        contributionsCollection {
          totalCommitContributions
          totalPullRequestContributions
          totalIssueContributions
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
        repositories(first: 100, ownerAffiliations: OWNER, orderBy: {direction: DESC, field: STARGAZERS}) {
          nodes {
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { login: username },
      }),
      // Cache this at build time, but allow revalidation if needed
      next: { revalidate: 3600 } 
    });

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.statusText}`);
    }

    const json = await res.json();
    if (json.errors) {
      throw new Error(json.errors[0].message);
    }

    const user = json.data.user;
    
    // Calculate total stars
    const stars = user.repositories.nodes.reduce(
      (acc: number, repo: any) => acc + repo.stargazers.totalCount,
      0
    );

    const collection = user.contributionsCollection;
    const calendar = collection.contributionCalendar;

    // Calculate Streaks
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;

    // Flatten weeks into a single array of days
    const days = calendar.weeks.flatMap((w: any) => w.contributionDays);
    
    // We only want to count up to today. 
    // The calendar might include days in the future (rest of the current week).
    const today = new Date().toISOString().split('T')[0];
    const pastDays = days.filter((d: any) => d.date <= today);

    // Calculate longest streak
    for (const day of pastDays) {
      if (day.contributionCount > 0) {
        tempStreak++;
        if (tempStreak > longestStreak) {
          longestStreak = tempStreak;
        }
      } else {
        tempStreak = 0;
      }
    }

    // Calculate current streak (counting backwards from today)
    for (let i = pastDays.length - 1; i >= 0; i--) {
      if (pastDays[i].contributionCount > 0) {
        currentStreak++;
      } else {
        // If today has 0 contributions, we check yesterday. If yesterday also has 0, streak is broken.
        if (i === pastDays.length - 1) {
          // Today has 0, it's okay, maybe they haven't committed yet today.
          continue;
        }
        break;
      }
    }

    return {
      stars,
      commits: collection.totalCommitContributions,
      prs: collection.totalPullRequestContributions,
      issues: collection.totalIssueContributions,
      totalContributions: calendar.totalContributions,
      currentStreak,
      longestStreak,
    };
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return null;
  }
}
