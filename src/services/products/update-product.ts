import { createClient } from "@/utils/supabase/server";
import { Product } from "@/src/types/products";

export const updateProduct = async (product: Product) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .update({
      name: product.name,
      desc: product.desc,
      price: product.price,
      image_url: product.image_url,
    })
    .eq("id", product.id)
    .select();

  if (error) {
    console.error("Erro ao atualizar produto:", error.message);
    return null;
  }

  return data?.[0];
};
