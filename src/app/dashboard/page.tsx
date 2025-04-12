import { getProducts, addProduct, deleteProduct, updateProduct } from "@/src/services/products";
import { Product } from "@/src/types/products";
import ProductList from "@/src/app/dashboard/components/product-list";
import ProductForm from "@/src/app/dashboard/components/product-form";
import { useState, useEffect } from "react";

const DashboardPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleAddOrUpdate = async (data: Omit<Product, "id">, id?: string) => {
    if (id) {
        console.log(data, id)
      //await updateProduct({ ...data, id });
    } else {
      await addProduct(data);
    }
    setEditingProduct(null);
    await fetchProducts();
  };

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    await fetchProducts();
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <ProductForm onSubmit={handleAddOrUpdate} initialData={editingProduct} />
      <ProductList products={products} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default DashboardPage;
