import { createClient } from "@/utils/supabase/server";
// 🔹 Atualizar um produto existente
export const updateProduct = async (id: string, name: string) => {
  const supabase = await createClient();
  const { error } = await supabase.from("products").update({ name }).eq("id", id);

  if (error) {
    console.error("Erro ao atualizar produto:", error.message);
  }
};