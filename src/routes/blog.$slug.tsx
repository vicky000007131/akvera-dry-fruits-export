import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/public-pages";
import { pageHead } from "@/lib/metadata";
import { blogs } from "@/mock/blogs";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => { const blog = blogs.find(b => b.id === params.slug); return pageHead(blog?.title || "Article Not Found", blog?.intro || "This dry-fruit article could not be found."); },
  component: ArticleRoute,
});

function ArticleRoute() {
  const { slug } = Route.useParams();
  return <ArticlePage slug={slug} />;
}
