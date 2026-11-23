import { createFileRoute } from "@tanstack/react-router";
import { ProductDetailPage } from "@/components/dry-fruit-pages";
import { products } from "@/mock/products";
import { pageHead } from "@/lib/metadata";

export const Route = createFileRoute("/products/$slug")({
  head: ({ params }) => { const product = products.find(p => p.id === params.slug); return pageHead(product ? `${product.name} | Dry-Fruit Collection` : "Dry Fruit Not Found", product ? `${product.description} Enquire about grades, packaging and export supply from Akvera Universal.` : "This dry fruit is not available in the Akvera Universal collection."); },
  component: ProductRoute,
});

function ProductRoute() {
  const { slug } = Route.useParams();
  return <ProductDetailPage slug={slug} />;
}
