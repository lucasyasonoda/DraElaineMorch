import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { adminLogin, adminLogout, getAdminPosts, isAdminLoggedIn, saveAdminPosts } from "@/lib/admin-blog";
import type { BlogPost } from "@/content/site";

export const Route = createFileRoute("/admin")({ component: AdminPage });

const CATEGORIES = [
  { value: "educacional", label: "Educacional" },
  { value: "novidades", label: "Novidades" },
  { value: "bem-estar", label: "Bem-Estar" },
] as const;

const empty = {
  slug: "",
  title: "",
  excerpt: "",
  content: "",
  category: "educacional",
  categoryLabel: "Educacional",
  date: new Date().toISOString().slice(0, 10),
  author: "Dra. Elaine Morch",
  image: "",
};

function AdminPage() {
  const navigate = useNavigate();
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [form, setForm] = useState(empty);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setLogged(isAdminLoggedIn());
    setPosts(getAdminPosts());
  }, []);

  function submitLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!adminLogin(username, password)) {
      setMessage("Usuário ou senha incorretos.");
      return;
    }
    setLogged(true);
    setMessage("");
  }

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setMessage("A imagem deve ter no máximo 5 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setForm((value) => ({ ...value, image: String(reader.result) }));
    reader.readAsDataURL(file);
  }

  function save(e: React.FormEvent) {
    e.preventDefault();
    const post = {
      ...form,
      slug: form.slug || form.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    };
    const next = [post as BlogPost, ...posts.filter((item) => item.slug !== post.slug)];
    saveAdminPosts(next);
    setPosts(next);
    setForm(empty);
    setMessage("Artigo salvo neste navegador.");
  }

  if (!logged) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <form onSubmit={submitLogin} className="w-full max-w-sm border-border bg-card p-8 space-y-4">
          <p className="eyebrow">{`Área restrita`}</p>
          <h1 className="page-title">Administração</h1>
          <input className="w-full border-border bg-background p-3" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input className="w-full border-border bg-background p-3" placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="w-full bg-foreground text-background p-3 uppercase tracking-widest text-xs">Entrar</button>
          {message && <p className="text-sm text-red-600">{message}</p>}
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <div><p className="eyebrow">Painel</p><h1 className="page-title">Novo artigo</h1></div>
          <button className="border border-border px-4 py-2 text-xs uppercase tracking-widest" onClick={() => { adminLogout(); setLogged(false); }}>Sair</button>
        </div>
        <form onSubmit={save} className="grid gap-4 border-border bg-card p-6 md:grid-cols-2">
          <input className="border border-border bg-background p-3" placeholder="Título" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          <input className="border border-border bg-background p-3" placeholder="Slug (opcional)" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
          <select className="border border-border bg-background p-3" value={form.category} onChange={(e) => { const category = CATEGORIES.find((item) => item.value === e.target.value) ?? CATEGORIES[0]; setForm({ ...form, category: category.value, categoryLabel: category.label }); }}>
            {CATEGORIES.map((category) => <option key={category.value} value={category.value}>{category.label}</option>)}
          </select>
          <input className="border border-border bg-background p-3" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
          <textarea className="border border-border bg-background p-3 md:col-span-2" placeholder="Resumo" required rows={3} value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} />
          <textarea className="border border-border bg-background p-3 md:col-span-2 font-mono text-sm" placeholder="Conteúdo HTML do artigo" required rows={12} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />
          <label className="text-sm md:col-span-2">Foto de capa<input className="block mt-2" type="file" accept="image/*" onChange={handleImage} /></label>
          {form.image && <img src={form.image} alt="Prévia" className="max-h-64 object-cover md:col-span-2" />}
          <button className="bg-foreground text-background p-3 uppercase tracking-widest text-xs md:col-span-2">Salvar artigo</button>
          {message && <p className="text-sm md:col-span-2">{message}</p>}
        </form>
        <h2 className="section-title mt-12">Artigos adicionados</h2>
        <ul className="mt-6 space-y-3">{posts.map((post) => <li key={post.slug} className="border border-border p-4 flex justify-between gap-4"><span>{post.title}</span><button className="text-xs uppercase" onClick={() => { const next = posts.filter((item) => item.slug !== post.slug); saveAdminPosts(next); setPosts(next); }}>Excluir</button></li>)}</ul>
        <button className="mt-8 underline" onClick={() => navigate({ to: "/blog" })}>Voltar ao blog</button>
      </div>
    </main>
  );
}

