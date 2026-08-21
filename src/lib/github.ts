export async function getGitHubStats(username: string) {
  const token = process.env.GH_STATS_PAT;
  if (!token) {
    console.warn("No GH_STATS_PAT provided. Returning default stats.");
    return null;
  }

  try {
    // 1. Fetch user creation date, stars, all-time PRs, and all-time Issues
    const baseQuery = `
      query userInfo($login: String!) {
        user(login: $login) {
          createdAt
          pullRequests {
            totalCount
          }
          issues {
            totalCount
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

    const baseRes = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: baseQuery,
        variables: { login: username },
      }),
      next: { revalidate: 3600 }
    });

    if (!baseRes.ok) throw new Error("GitHub API Error on base query");
    const baseJson = await baseRes.json();
    if (baseJson.errors) throw new Error(baseJson.errors[0].message);

    const user = baseJson.data.user;
    const createdAt = new Date(user.createdAt);
    const creationYear = createdAt.getFullYear();
    const currentYear = new Date().getFullYear();

    const stars = user.repositories.nodes.reduce(
      (acc: number, repo: any) => acc + repo.stargazers.totalCount,
      0
    );
    const prs = user.pullRequests.totalCount;
    const issues = user.issues.totalCount;

    // 2. Fetch contributions for ALL years to calculate total commits, total contributions and exact streaks
    let totalCommits = 0;
    let totalContributions = 0;
    let allDays: any[] = [];

    // Fetch year by year (GraphQL limits to 1 year per request)
    for (let year = currentYear; year >= creationYear; year--) {
      // Set bounds for the year
      const from = `${year}-01-01T00:00:00Z`;
      // End at exactly end of year, or current date for current year
      const to = `${year}-12-31T23:59:59Z`;

      const calQuery = `
        query yearStats($login: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $login) {
            contributionsCollection(from: $from, to: $to) {
              totalCommitContributions
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
          }
        }
      `;

      const calRes = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: calQuery,
          variables: { login: username, from, to },
        }),
        next: { revalidate: 3600 }
      });

      if (!calRes.ok) continue;
      const calJson = await calRes.json();
      if (calJson.errors) continue;

      const collection = calJson.data.user.contributionsCollection;
      const calendar = collection.contributionCalendar;

      totalCommits += collection.totalCommitContributions;
      totalContributions += calendar.totalContributions;

      // Extract days and prepend to our list (so it remains chronological: oldest -> newest)
      const days = calendar.weeks.flatMap((w: any) => w.contributionDays);
      allDays = days.concat(allDays);
    }

    // Filter out future days (GraphQL might return days up to the end of the current week)
    const todayStr = new Date().toISOString().split('T')[0];
    const pastDays = allDays.filter(d => d.date <= todayStr);
    
    // De-duplicate days (sometimes the year boundary can cause overlap in weeks)
    const uniqueDaysMap = new Map();
    pastDays.forEach(d => uniqueDaysMap.set(d.date, d.contributionCount));
    
    // Sort chronologically just in case
    const sortedDates = Array.from(uniqueDaysMap.keys()).sort();

    // 3. Calculate Streaks
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;

    for (const date of sortedDates) {
      const count = uniqueDaysMap.get(date);
      if (count > 0) {
        tempStreak++;
        if (tempStreak > longestStreak) {
          longestStreak = tempStreak;
        }
      } else {
        tempStreak = 0;
      }
    }

    // Current streak (count backwards from today)
    for (let i = sortedDates.length - 1; i >= 0; i--) {
      const count = uniqueDaysMap.get(sortedDates[i]);
      if (count > 0) {
        currentStreak++;
      } else {
        // If today has 0, we can check yesterday. If yesterday also has 0, streak is 0.
        if (i === sortedDates.length - 1) {
          continue; // Today hasn't ended yet
        }
        break; // Streak broken
      }
    }

    return {
      stars,
      commits: totalCommits,
      prs,
      issues,
      totalContributions,
      currentStreak,
      longestStreak,
    };
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return null;
  }
}
