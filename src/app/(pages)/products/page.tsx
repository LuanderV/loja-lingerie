import { getProducts } from "@/src/app/api/products/[slug]/route";

interface Product {
  params: { id: string };
}

const ProductsPage = async () => {
  const products = await getProducts();

  if (!products || products.length === 0) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Produtos</h1>
        <p className="text-gray-500">Nenhum produto encontrado.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Produtos</h1>
      <ul className="mt-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="border-b p-4 flex justify-between items-center"
          >
            <span>{product.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
