export interface GithubOverview {
  publicRepos: number;
  stars: number;
  followers: number;
  languages: { name: string; count: number }[];
  recent: { name: string; url: string }[];
  countedRepos: number;
}

export interface GithubStreak {
  totalContributions: number;
  current: number;
  longest: number;
}

export interface GithubActivity {
  overview: GithubOverview | null;
  streak: GithubStreak | null;
}
