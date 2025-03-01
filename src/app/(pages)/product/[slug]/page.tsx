import { getProductById } from "@/src/services/products/products";

interface ProductPageProps {
  params: { slug: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.slug);

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-lg">{product.description}</p>
      <p className="text-xl font-semibold mt-4">R$ {product.price}</p>
    </div>
  );
}
