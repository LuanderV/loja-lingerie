import { createClient } from "@/utils/supabase/server";

export const deleteProduct = async (id: string) => {
  const supabase = await createClient();
  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) {
    console.error("Erro ao excluir produto:", error.message);
  }
};
