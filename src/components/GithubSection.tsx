"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitFork, Star, ExternalLink } from "lucide-react";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  bio: string;
}

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
}

// Centralized username from env
const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "rishabh0510rishabh";

const langColors: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Java: "#B07219",
  Jupyter: "#DA5B0B",
};

export default function GithubSection() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGH = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6&type=owner`
          ),
        ]);
        if (userRes.ok && reposRes.ok) {
          setUser(await userRes.json());
          setRepos(await reposRes.json());
        }
      } catch (e) {
        console.error("GitHub API error:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchGH();
  }, []);

  return (
    <section className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-4">06 / Open Source</p>
          <h2 className="text-4xl font-black">
            GitHub <span className="text-gradient">Activity</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card-premium rounded-3xl p-8"
        >
          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mb-10">
            {[
              { value: user?.public_repos ?? "—", label: "Public Repos", color: "#4F9CF9" },
              { value: user?.followers ?? "—", label: "Followers", color: "#00FFC6" },
              { value: user?.following ?? "—", label: "Following", color: "#A78BFA" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black font-mono" style={{ color: s.color }}>
                  {loading ? (
                    <span className="inline-block w-10 h-8 bg-slate-800 rounded animate-pulse" />
                  ) : (
                    s.value
                  )}
                </div>
                <div className="text-xs uppercase text-slate-500 font-bold tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* GitHub Contribution Graph via img (real) */}
          <div className="mb-8 overflow-hidden rounded-xl bg-slate-900/50 p-4">
            <img
              src={`https://ghchart.rshah.org/4F9CF9/${GITHUB_USERNAME}`}
              alt="GitHub contribution graph"
              className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
            <p className="text-[10px] text-slate-600 text-right mt-2 font-mono">
              Contribution graph powered by ghchart
            </p>
          </div>

          {/* Top repos */}
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Recent Repositories</p>
          <div className="grid md:grid-cols-3 gap-4">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="glass-card p-5 rounded-2xl h-28 animate-pulse" />
              ))
              : repos.slice(0, 6).map((repo, i) => (
                <motion.a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card p-5 rounded-2xl group block"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm font-mono font-semibold text-white group-hover:text-[#4F9CF9] transition-colors truncate max-w-[80%]">
                      {repo.name}
                    </h4>
                    <ExternalLink size={12} className="text-slate-600 group-hover:text-[#4F9CF9] transition-colors shrink-0" />
                  </div>
                  {repo.description && (
                    <p className="text-xs text-slate-500 mb-3 line-clamp-2">{repo.description}</p>
                  )}
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: langColors[repo.language] ?? "#6B7280" }}
                        />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star size={11} />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={11} />
                      {repo.forks_count}
                    </span>
                  </div>
                </motion.a>
              ))}
          </div>
        </motion.div>

        {/* Instructions callout for GitHub username */}
        <div className="mt-4 text-center">
          <p className="text-xs text-slate-600 font-mono">
            Stats fetched live from GitHub API · Update username in{" "}
            <code className="text-[#4F9CF9]">GithubSection.tsx</code>{" "}
            line 31
          </p>
        </div>
      </div>
    </section>
  );
}
