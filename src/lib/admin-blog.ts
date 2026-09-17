import type { BlogPost } from "@/content/site";

export const ADMIN_USERNAME = "morchelaineadmin";
export const ADMIN_PASSWORD = "morch2026@";
const POSTS_KEY = "elaine_admin_blog_posts";

// A autenticação fica apenas no estado da página. Assim, recarregar o site,
// fechar a aba ou outra pessoa acessar o painel exige um novo login.
export function isAdminLoggedIn(): boolean {
  return false;
}

export function adminLogin(username: string, password: string): boolean {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

export function adminLogout(): void {
  // O estado autenticado é controlado pelo componente do painel.
}

export function getAdminPosts(): BlogPost[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(POSTS_KEY) || "[]") as BlogPost[];
  } catch {
    return [];
  }
}

export function saveAdminPosts(posts: BlogPost[]): void {
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
}
