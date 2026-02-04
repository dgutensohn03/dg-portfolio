// Resolves public assets both locally and on GitHub Pages
export function getAssetPath(path: string) {
    const base = import.meta.env.BASE_URL?.replace(/\/+$/, "") || "";
    const cleaned = path.replace(/^\/+/, "");
    return `${base}/${cleaned}`;
  }
  