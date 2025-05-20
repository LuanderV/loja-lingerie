import { ProductProps } from "@/src/app/(pages)/product/[slug]/types";
import ProductImage from "@/src/components/product-image";
import { getProductById } from "@/src/services/products";

export default async function ProductPage(props: ProductProps) {
  const { slug } = await props.params;
  const id = Number(slug.split("-")[0]);
  const product = await getProductById(id);

  if (!product) {
    return <p className="text-center text-xl mt-10">Produto não encontrado.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
      <div className="bg-white rounded-lg shadow-md max-w-5xl w-full p-6 flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex items-center justify-center">
          <div className="aspect-[3/4] w-full max-w-md rounded-lg border overflow-hidden relative">
            <ProductImage
              frontImage={product.image_front_url}
              backImage={product.image_back_url || product.image_front_url}
              alt={product.name}
            />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>

          <div className="flex items-center gap-2 mb-1">
            <span className="text-gray-400 line-through text-sm">R$ 299,90</span>
            <span className="text-pink-600 font-bold text-xl">
              R$ {Number(product.price).toFixed(2)}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-4">Em até 3x R$ {(Number(product.price) / 3).toFixed(2)} sem juros</p>

          <div className="mb-4">
            <p className="text-sm font-medium mb-2">Cor</p>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-[#1c2b4a] border-2 border-gray-300" />
              <button className="w-8 h-8 rounded-full bg-[#c18ab4] border-2 border-gray-300" />
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm font-medium mb-2">Tamanho</p>
            <div className="flex gap-2">
              {["M", "G", "GG"].map((size) => (
                <button
                  key={size}
                  className="border rounded-full px-4 py-1 text-sm font-medium text-gray-700 hover:border-pink-600 transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <span className="font-medium">Quantidade:</span>
            <div className="flex items-center border rounded-md overflow-hidden w-fit">
              <button className="px-3 py-1 hover:bg-gray-100">-</button>
              <span className="px-4">1</span>
              <button className="px-3 py-1 hover:bg-gray-100">+</button>
            </div>
          </div>

          <div className="text-sm text-gray-700">
            <p className="font-semibold mb-1">Descrição</p>
            <p>{product.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}