import { slugify } from "@/src/lib/slugify";
import Link from "next/link";
import { getProducts } from "@/src/services/products";
import { Product } from "@/src/types/products";

const ProductsPage = async () => {
  const products: Product[] = await getProducts();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Produtos</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <Link href={`/product/${product.id}-${slugify(product.name)}`}>
              <div className="aspect-square w-full bg-gray-100 flex items-center justify-center">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-sm font-semibold text-gray-900">
                  {product.name}
                </h2>
                <p className="text-xs text-gray-500 mb-2">{product.desc}</p>
                <p className="text-pink-600 font-bold text-sm">
                  R$ {product.price}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
