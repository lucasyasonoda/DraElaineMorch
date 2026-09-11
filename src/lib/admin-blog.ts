import type { BlogPost } from "@/content/site";

export const ADMIN_USERNAME = "morchelaineadmin";
export const ADMIN_PASSWORD = "morch2026@";
const POSTS_KEY = "elaine_admin_blog_posts";
const SESSION_KEY = "elaine_admin_session";

export function isAdminLoggedIn(): boolean {
  return typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY) === "1";
}

export function adminLogin(username: string, password: string): boolean {
  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) return false;
  sessionStorage.setItem(SESSION_KEY, "1");
  return true;
}

export function adminLogout(): void {
  sessionStorage.removeItem(SESSION_KEY);
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
