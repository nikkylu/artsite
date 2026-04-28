export const repoName = "artsite";

export const isGitHubPagesBuild =
  process.env.GITHUB_ACTIONS === "true" ||
  process.env.GITHUB_PAGES === "true";

export const basePath = isGitHubPagesBuild ? `/${repoName}` : "";

export function withBasePath(path: string) {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
