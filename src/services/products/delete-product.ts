import { createClient } from "@/utils/supabase/server";

export const deleteProduct = async (id: string) => {
  const supabase = await createClient();

  const { data: product, error: fetchError } = await supabase
    .from("products")
    .select("image_front_url, image_back_url")
    .eq("id", id)
    .single();

  if (fetchError) {
    console.error("Erro ao buscar produto:", fetchError.message);
    return;
  }

  if (product?.image_front_url) {
    const imagePath = product.image_front_url.split("/img-products/")[1];
    if (imagePath) {
      const { error: storageError } = await supabase.storage
        .from("img-products")
        .remove([imagePath]);

      if (storageError) {
        console.error("Erro ao excluir imagem frontal:", storageError.message);
      }
    }
  }

  if (product?.image_back_url) {
    const imagePathBack = product.image_back_url.split("/img-products/")[1];
    if (imagePathBack) {
      const { error: storageErrorBack } = await supabase.storage
        .from("img-products")
        .remove([imagePathBack]);

      if (storageErrorBack) {
        console.error("Erro ao excluir imagem traseira:", storageErrorBack.message);
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
