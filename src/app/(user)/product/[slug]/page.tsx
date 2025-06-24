import { ProductProps } from "@/src/app/(user)/product/[slug]/types";
import { ProductImage } from "@/src/components/product-image/product-image";
import { getProductById } from "@/src/services/products";
import ProductDetailsClient from "@/src/components/product-details-client/product-details-client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb";

export default async function ProductPage(props: ProductProps) {
  const { slug } = await props.params;
  const id = Number(slug.split("-")[0]);
  const product = await getProductById(id);

  if (!product) {
    return <p className="text-center text-xl mt-10">Produto não encontrado.</p>;
  }

  return (
    <div className="min-h-screen mt-40 px-4 flex justify-center">
      <div className="max-w-5xl w-full p-6 flex flex-col md:flex-row gap-6">
        <div className="flex-1 items-center justify-center">
          <Breadcrumb className="p-2">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Início</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>Produto</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold">{product.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="aspect-[3/4] w-full max-w-md rounded-lg border overflow-hidden relative">
            <ProductImage
              frontImage={product.image_front_url}
              backImage={product.image_back_url}
              alt={product.name}
            />
          </div>
        </div>

        <ProductDetailsClient
          name={product.name}
          price={product.price}
          desc={product.desc}
        />
      </div>
    </div>
  );
}
