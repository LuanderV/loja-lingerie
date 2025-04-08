import { createClient } from "@/utils/supabase/server";
// 🔹 Adicionar um novo produto
export const addProduct = async (name: string) => {
  const supabase = await createClient();
  const { error } = await supabase.from("products").insert([{ name }]);

  if (error) {
    console.error("Erro ao adicionar produto:", error.message);
  }
};