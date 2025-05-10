import { createClient } from "@/utils/supabase/client";

export async function uploadImage(file: File, productId: number) {
  const supabase = createClient();

  const filePath = `${productId}/${Date.now()}_${file.name}`;

  const { error } = await supabase.storage
    .from("img-products")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: true,
    });

  if (error) {
    console.error("Erro ao fazer upload:", error?.message || error);
    return null;
  }

  const { data } = supabase.storage
    .from("img-products")
    .getPublicUrl(filePath);

  const publicUrl = data.publicUrl;

  const { error: updateError } = await supabase
    .from("products")
    .update({ image_url: publicUrl })
    .eq("id", productId);

  if (updateError) {
    console.error("Erro ao salvar URL da imagem:", updateError.message);
    return null;
  }

  return publicUrl;
}
