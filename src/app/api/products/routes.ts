// import { NextResponse } from "next/server";
// import {
//   getProducts,
//   addProduct,
//   updateProduct,
//   deleteProduct,
// } from "@/src/services/products/index";

// export async function GET() {
//   try {
//     const data = await getProducts();
//     return NextResponse.json(data);
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const data = await addProduct(body);
//     return NextResponse.json(data);
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// export async function PUT(req: Request) {
//   try {
//     const body = await req.json();
//     const data = await updateProduct(body);
//     return NextResponse.json(data);
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// export async function DELETE(req: Request) {
//   try {
//     const body = await req.json();
//     await deleteProduct(body.id);
//     return NextResponse.json({ message: "Produto deletado com sucesso" });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
