"use client";

import Image from "next/image";
import { SectionWrapper } from "./section-wrapper";

export function GitHubStatsSection() {
  return (
    <SectionWrapper id="github-stats" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
          Estatísticas GitHub
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-10" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="bg-card border border-border rounded-xl p-3 hover:shadow-lg transition-shadow duration-300">
            <Image
              src="https://github-readme-stats.vercel.app/api?username=Kevinrehem&show_icons=true&theme=dracula&count_private=true"
              alt="GitHub Stats"
              width={495}
              height={195}
              className="rounded-lg"
            />
          </div>
          <div className="bg-card border border-border rounded-xl p-3 hover:shadow-lg transition-shadow duration-300">
            <Image
              src="https://github-readme-streak-stats.herokuapp.com/?user=Kevinrehem&theme=dracula"
              alt="GitHub Streak"
              width={495}
              height={195}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
