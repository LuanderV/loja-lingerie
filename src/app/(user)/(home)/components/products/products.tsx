import Link from "next/link";
import { slugify } from "@/src/lib/slugify";
import { getProducts } from "@/src/services/products";
import { Product } from "@/src/types/products";
import { ProductImage } from "@/src/components/product-image";
import { Heart } from "lucide-react";

const ProductsPage = async () => {
  const products: Product[] = await getProducts();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Produtos</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition relative"
          >
            <Link href={`/product/${product.id}-${slugify(product.name)}`}>
              <div className="aspect-square w-full h-80 bg-gray-100 relative rounded-t-lg overflow-hidden">
                <ProductImage
                  frontImage={product.image_front_url}
                  backImage={product.image_back_url}
                  alt={product.name}
                />

                <div className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow">
                  <Heart size={18} className="text-gray-500" />
                </div>

                <span className="absolute top-2 right-10 z-10 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -42%
                </span>
              </div>

              <div className="p-4">
                <h2 className="text-sm font-semibold text-gray-900 mb-1">
                  {product.name}
                </h2>

                <div className="flex items-center space-x-2">
                  <p className="text-pink-600 font-bold text-sm">
                    R$ {Number(product.price).toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-400 line-through">
                    R$ 299,90
                  </p>
                </div>

                <p className="text-[11px] text-gray-500 mt-1">
                  Em até 3x R$ {(Number(product.price) / 3).toFixed(2)} sem juros
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