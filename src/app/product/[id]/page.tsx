export const dynamic = "force-dynamic";

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1>Product {params.id}</h1>
      <p data-testid="product-id">Product ID: {params.id}</p>
      <p>This page proves dynamic routes (`[id]`) work end-to-end on Akash.</p>
      <a href="/">← back</a>
    </main>
  );
}
