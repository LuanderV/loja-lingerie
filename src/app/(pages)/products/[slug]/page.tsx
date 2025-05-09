interface ProductProps {
  params: {
    slug: string;
  }
};

export default async function ProductPage({ params }: ProductProps) {
  const { slug } = params;
  const id = Number(slug.split("-")[0]);

  const res = await fetch(`http://localhost:3000/api/products/${id}`);

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
