import { getProductById } from "@/src/services/products/products";

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductById(params.slug);

  return (
    <div>
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-lg">desc product</p>
      <p className="text-xl font-semibold mt-4">R$ preço</p>
    </div>
  );
}
