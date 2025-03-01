import { createClient } from "@/utils/supabase/server";

export async function getProductById(id: string) {
  const supabase = await createClient();

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Erro ao buscar produto:", error.message);
    return null;
  }

  return product;
}
