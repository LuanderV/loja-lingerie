import { getProductById } from "@/src/services/products/get-product-by-id";
import { ProductProps } from "./types";

export default async function ProductPage(props: ProductProps) {
  const { slug } = await props.params;
  const id = Number(slug.split("-")[0]);
  const product = await getProductById(id);

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-lg">{product.desc}</p>
      <p className="text-xl font-semibold mt-4">R$ {product.price}</p>
    </div>
  );
}
