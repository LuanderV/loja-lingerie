import { createClient } from "@/utils/supabase/server";

export const deleteProduct = async (id: string) => {
  const supabase = await createClient();

  const { data: product, error: fetchError } = await supabase
    .from("products")
    .select("image_url")
    .eq("id", id)
    .single();

  if (fetchError) {
    console.error("Erro ao buscar produto:", fetchError.message);
    return;
  }

  if (product?.image_url) {
    const imagePath = product.image_url.split("/img-products/")[1];
    if (imagePath) {
      const { error: storageError } = await supabase.storage
        .from("img-products")
        .remove([imagePath]);

      if (storageError) {
        console.error("Erro ao excluir imagem:", storageError.message);
      }
    }
  }

  const { error: deleteError } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (deleteError) {
    console.error("Erro ao excluir produto:", deleteError.message);
  }
};
