import { getProductById } from "@/src/services/products";
import { ProductProps } from "./types";

export default async function ProductPage({ params }: ProductProps) {
  const id = params.slug.split("-")[0]; 

  const product = await getProductById(id);

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-lg">desc</p>
      <p className="text-xl font-semibold mt-4">R$ preço</p>
    </div>
  );
}
