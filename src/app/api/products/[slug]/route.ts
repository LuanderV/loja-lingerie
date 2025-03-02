import { createClient } from "@/utils/supabase/server";

interface Product {
  id: string;
  name: string;
}

export const getProductById = async (id: string): Promise<Product | null> => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("products").select("*").eq("id", id).single();

  if (error) {
    console.error("Erro ao buscar produto:", error.message);
    return null;
  }
  return data;
};

export const getProducts = async (): Promise<Product[]> => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error("Erro ao buscar produtos:", error.message);
    return [];
  }
  return data;
};