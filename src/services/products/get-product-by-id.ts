// import { createClient } from "@/utils/supabase/server";
// import { Product } from "@/src/types/products";

// export const getProductById = async (id: string) => {
//   const supabase = await createClient();

//   const { data, error } = await supabase
//     .from("products")
//     .select("*")
//     .eq("id", id)
//     .single();

//   if (error) {
//     console.error("Erro ao buscar produto:", error.message);
//     return null;
//   }

//   return data as Product;
// };
