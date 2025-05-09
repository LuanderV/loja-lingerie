import { createClient } from "@/utils/supabase/server";
import { Product } from "@/src/types/products";

export const getProducts = async (): Promise<Product[]> => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error("Erro ao buscar produtos:", error.message);
    return [];
  }
  return data;
};