// import { NextResponse } from "next/server";
// import { getProductById } from "@/src/services/products/get-product-by-id";

// export async function GET(req: Request, props: { params: Promise<{ id: string }> }) {
//   const params = await props.params;
//   const id = Number(params.id);

//   if (isNaN(id)) {
//     return NextResponse.json({ error: "ID inválido" }, { status: 400 });
//   }

//   try {
//     const product = await getProductById(id);

//     if (!product) {
//       return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 });
//     }

//     return NextResponse.json(product);
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
