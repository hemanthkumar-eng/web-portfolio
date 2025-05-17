export function getBasePath() {
  return process.env.NODE_ENV === "production" ? "/web-portfolio" : "";
}

export function getAssetPath(path: string) {
  return `${getBasePath()}${path}`;
}
