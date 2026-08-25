import { Outlet, createFileRoute, notFound } from "@tanstack/react-router";
import { getCategory } from "@/content/site";

export const Route = createFileRoute("/tratamentos/$categoria")({
  loader: ({ params }) => {
    const category = getCategory(params.categoria);
    if (!category) throw notFound();
    return { category };
  },
  component: () => <Outlet />,
});
