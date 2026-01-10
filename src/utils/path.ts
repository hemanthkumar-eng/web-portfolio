export function getBasePath() {
  // Always return basePath since we're configured for GitHub Pages
  return "/web-portfolio";
}

export function getAssetPath(path: string) {
  return `${getBasePath()}${path}`;
}
