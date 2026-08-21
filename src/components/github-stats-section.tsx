import { getGitHubStats } from "@/lib/github";
import { SectionWrapper } from "./section-wrapper";
import { Star, GitCommit, GitPullRequest, CircleDot, Flame, Trophy } from "lucide-react";

export async function GitHubStatsSection() {
  const stats = await getGitHubStats("Kevinrehem");

  if (!stats) {
    // Se não tiver token ou der erro, podemos mostrar um skeleton ou fallback
    return (
      <SectionWrapper id="github-stats" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-muted-foreground">
          <p>Estatísticas temporariamente indisponíveis (Configure o GH_STATS_PAT).</p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="github-stats" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
          Estatísticas GitHub
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch justify-center">
          
          {/* Stats Card */}
          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              GitHub Stats
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" /> Total Stars
                </span>
                <span className="text-2xl font-bold">{stats.stars}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <GitCommit className="w-4 h-4 text-emerald-500" /> Commits
                </span>
                <span className="text-2xl font-bold">{stats.commits}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <GitPullRequest className="w-4 h-4 text-blue-500" /> PRs
                </span>
                <span className="text-2xl font-bold">{stats.prs}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <CircleDot className="w-4 h-4 text-rose-500" /> Issues
                </span>
                <span className="text-2xl font-bold">{stats.issues}</span>
              </div>
            </div>
          </div>

          {/* Streak Card */}
          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
             <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" />
              Streak Stats
            </h3>

            <div className="flex justify-between items-center h-full px-2">
              
              <div className="flex flex-col items-center">
                <span className="text-sm text-muted-foreground mb-1">Total</span>
                <span className="text-3xl font-bold text-foreground">{stats.totalContributions}</span>
                <span className="text-xs text-muted-foreground mt-1">Contribs</span>
              </div>

              <div className="w-px h-16 bg-border mx-2" />

              <div className="flex flex-col items-center relative">
                <span className="text-sm text-muted-foreground mb-1">Current</span>
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full border-4 border-orange-500 bg-background shadow-inner">
                  <span className="text-2xl font-bold text-foreground">{stats.currentStreak}</span>
                </div>
                <span className="text-xs text-muted-foreground mt-2">Streak</span>
              </div>

              <div className="w-px h-16 bg-border mx-2" />

               <div className="flex flex-col items-center">
                <span className="text-sm text-muted-foreground mb-1">Longest</span>
                <span className="text-3xl font-bold text-foreground">{stats.longestStreak}</span>
                <span className="text-xs text-muted-foreground mt-1">Streak</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
