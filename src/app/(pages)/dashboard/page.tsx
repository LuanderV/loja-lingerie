import DashboardClient from './components/dashboard';
import { getProducts, addProduct, updateProduct, deleteProduct } from '@/src/services/products';
import { Product } from '@/src/types/products';

export default async function DashboardPage() {
  const products = await getProducts();

  const handleAdd = async (product: Omit<Product, 'id'>) => {
    'use server';
    return await addProduct(product);
  };

  const handleUpdate = async (product: Product) => {
    'use server';
    return await updateProduct(product);
  };

  const handleDelete = async (id: string) => {
    'use server';
    await deleteProduct(id);
  };

  return (
    <DashboardClient
      initialProducts={products}
      onAdd={handleAdd}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
    />
  );
}
