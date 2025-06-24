import ProductsPage from "./components/products/products";
import CollectionsGrid from "./components/collections-grid/collections-grid";
import SwiperHeader from "./components/header/swiper-header";

export default async function Home() {
  return (
    <>
      <SwiperHeader />
      <CollectionsGrid />
      <ProductsPage />
    </>
  );
}
