import { createClient } from "@/utils/supabase/server";

interface Product {
  id: string;
  name: string;
}

// 🔹 Listar todos os produtos
export const getProducts = async (): Promise<Product[]> => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error("Erro ao buscar produtos:", error.message);
    return [];
  }
  return data;
};

// 🔹 Buscar um produto por ID
export const getProductById = async (id: string): Promise<Product | null> => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("products").select("*").eq("id", id).single();

  if (error) {
    console.error("Erro ao buscar produto:", error.message);
    return null;
  }
  return data;
};

// 🔹 Adicionar um novo produto
export const addProduct = async (name: string) => {
  const supabase = await createClient();
  const { error } = await supabase.from("products").insert([{ name }]);

  if (error) {
    console.error("Erro ao adicionar produto:", error.message);
  }
};

// 🔹 Atualizar um produto existente
export const updateProduct = async (id: string, name: string) => {
  const supabase = await createClient();
  const { error } = await supabase.from("products").update({ name }).eq("id", id);

  if (error) {
    console.error("Erro ao atualizar produto:", error.message);
  }
};

// 🔹 Excluir um produto
export const deleteProduct = async (id: string) => {
  const supabase = await createClient();
  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) {
    console.error("Erro ao excluir produto:", error.message);
  }
};
