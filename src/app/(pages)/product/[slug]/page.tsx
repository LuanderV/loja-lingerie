import { ProductProps } from "@/src/app/(pages)/product/[slug]/types";
import { getProductById } from "@/src/services/products";

export default async function ProductPage(props: ProductProps) {
  const { slug } = await props.params;
  const id = Number(slug.split("-")[0]);
  const product = await getProductById(id);

  if (!product) {
    return <p className="text-center text-xl mt-10">Produto não encontrado.</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

        {product.image_url && (
          <div className="aspect-square w-full mb-4 overflow-hidden rounded-lg border">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <p className="text-gray-600 text-base mb-2">{product.desc}</p>
        <p className="text-xl font-semibold text-green-600">
          R$ {Number(product.price).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
