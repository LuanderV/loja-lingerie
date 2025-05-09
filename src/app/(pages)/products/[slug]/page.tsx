import { ProductProps } from "./types";

export default async function ProductPage(props: ProductProps) {
  const params = await props.params;
  const { slug } = params;
  const id = Number(slug.split("-")[0]);

  const res = await fetch(`https://gaveta-de-mulher.vercel.app/api/products/${id}`);

  const product = await res.json();

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
