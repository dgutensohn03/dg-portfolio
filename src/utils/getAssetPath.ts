// Resolves public assets both locally and on GitHub Pages
export function getAssetPath(path: string) {
  const cleaned = path.replace(/^\/+/, "");
  return `/${cleaned}`;
}