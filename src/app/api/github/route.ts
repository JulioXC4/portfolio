import type { GithubActivity, GithubOverview, GithubStreak } from '@/lib/github';

const account = 'JulioXC4';

interface PublicRepo {
  name: string;
  private: boolean;
  fork: boolean;
  language: string | null;
  stargazers_count: number;
}

async function requestJson(url: string) {
  const response = await fetch(url, {
    headers: { Accept: 'application/json', 'User-Agent': 'Julio-Castro-Portfolio' },
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error('Public activity service unavailable');
  return response.json();
}

async function getOverview(): Promise<GithubOverview> {
  const [profile, repositories] = await Promise.all([
    requestJson(`https://api.github.com/users/${account}`),
    requestJson(`https://api.github.com/users/${account}/repos?per_page=100&sort=pushed`),
  ]);
  if (profile.login !== account || !Number.isFinite(profile.public_repos) || !Number.isFinite(profile.followers) || !Array.isArray(repositories)) throw new Error('Invalid public profile');
  const repos: PublicRepo[] = repositories.filter((repo): repo is PublicRepo =>
    repo && typeof repo.name === 'string' && repo.private === false && Number.isFinite(repo.stargazers_count));
  const languages = new Map<string, number>();
  for (const repo of repos) {
    if (!repo.fork && typeof repo.language === 'string') languages.set(repo.language, (languages.get(repo.language) ?? 0) + 1);
  }
  return {
    publicRepos: profile.public_repos,
    followers: profile.followers,
    stars: repos.reduce((total, repo) => total + repo.stargazers_count, 0),
    countedRepos: repos.length,
    languages: [...languages].map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name)).slice(0, 5),
    recent: repos.slice(0, 3).map(repo => ({ name: repo.name, url: `https://github.com/${account}/${encodeURIComponent(repo.name)}` })),
  };
}

async function getStreak(): Promise<GithubStreak> {
  const data = await requestJson(`https://streak-stats.demolab.com/?user=${account}&type=json`);
  const values = [data.totalContributions, data.currentStreak?.length, data.longestStreak?.length];
  if (!values.every(value => Number.isFinite(value) && value >= 0)) throw new Error('Invalid streak data');
  return { totalContributions: values[0], current: values[1], longest: values[2] };
}

export async function GET() {
  const [overview, streak] = await Promise.allSettled([getOverview(), getStreak()]);
  const activity: GithubActivity = {
    overview: overview.status === 'fulfilled' ? overview.value : null,
    streak: streak.status === 'fulfilled' ? streak.value : null,
  };
  const available = activity.overview || activity.streak;
  const complete = activity.overview && activity.streak;
  return Response.json(activity, {
    status: available ? 200 : 503,
    headers: { 'Cache-Control': available ? `public, s-maxage=${complete ? 3600 : 300}, stale-while-revalidate=86400` : 'no-store' },
  });
}
