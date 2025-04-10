import ProductsPage from "./components/products/products";
import CollectionsGrid from "./components/collections-grid/collections-grid";

export default async function Home() {
  return (
    <>
      <CollectionsGrid />
      <ProductsPage />
    </>
  );
}
