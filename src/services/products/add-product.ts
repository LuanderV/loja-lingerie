import { createClient } from "@/utils/supabase/server";
import { Product } from "@/src/types/products";

export const addProduct = async (product: Omit<Product, "id">) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .insert([product])
    .select();

  if (error) {
    console.error("Erro ao adicionar produto:", error.message);
    return null;
  }

  return data?.[0];
};
