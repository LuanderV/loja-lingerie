// 'use client';

// //NAO USAR FETCH, TROCAR POR SERVICES

// import { useEffect, useState } from 'react';
// import { Product } from '@/src/types/products';
// import { Button } from '@/src/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
// import { Label } from '@radix-ui/react-label';
// import { Input } from '@/src/components/ui/input';
export default function DashboardPage() {
  return (
    <h1>teste</h1>
  );
}

// export default function DashboardPage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [name, setName] = useState('');
//   const [desc, setDesc] = useState('');
//   const [price, setPrice] = useState('');
//   const [editing, setEditing] = useState<Product | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   // 🔹 Carregar os produtos
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch('/api/products');
//         if (!res.ok) throw new Error('Erro ao carregar os produtos');
//         const data = await res.json();
//         setProducts(data);
//       } catch (err: any) {
//         setError(err.message);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // 🔹 Adicionar ou atualizar produto
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const productData = { name, desc, price: parseFloat(price) };

//     try {
//       let response;

//       if (editing) {
//         response = await fetch('/api/products', {
//           method: 'PUT',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ id: editing.id, ...productData }),
//         });
//       } else {
//         response = await fetch('/api/products', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(productData),
//         });
//       }

//       if (!response.ok) throw new Error('Erro ao salvar o produto');
      
//       // Limpar o formulário
//       setName('');
//       setDesc('');
//       setPrice('');
//       setEditing(null);

//       // Recarregar a lista de produtos
//       const updatedProducts = await fetch('/api/products').then(res => res.json());
//       setProducts(updatedProducts);
//     } catch (error: any) {
//       setError(error.message);
//     }
//   };

//   // 🔹 Excluir produto
//   const handleDelete = async (id: number) => {
//     try {
//       const response = await fetch('/api/products', {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ id }),
//       });

//       if (!response.ok) throw new Error('Erro ao excluir o produto');

//       // Recarregar a lista de produtos
//       const updatedProducts = await fetch('/api/products').then(res => res.json());
//       setProducts(updatedProducts);
//     } catch (error: any) {
//       setError(error.message);
//     }
//   };

//   // 🔹 Editar produto
//   const handleEdit = (product: Product) => {
//     setEditing(product);
//     setName(product.name);
//     setDesc(product.desc);
//     setPrice(product.price.toString());
//   };

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-semibold mb-6">Dashboard de Produtos</h1>

//       {error && <div className="text-red-500 mb-4">{error}</div>}

//       {/* Formulário de Adição/Atualização de Produto */}
//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle>{editing ? 'Editar Produto' : 'Adicionar Produto'}</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <Label htmlFor="name">Nome</Label>
//               <Input
//                 id="name"
//                 placeholder="Digite o nome do produto"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <Label htmlFor="desc">Descrição</Label>
//               <Input
//                 id="desc"
//                 placeholder="Digite a descrição do produto"
//                 value={desc}
//                 onChange={(e) => setDesc(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <Label htmlFor="price">Preço</Label>
//               <Input
//                 id="price"
//                 type="number"
//                 placeholder="Digite o preço"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="flex space-x-4">
//               <Button type="submit">
//                 {editing ? 'Atualizar Produto' : 'Adicionar Produto'}
//               </Button>
//               {editing && (
//                 <Button
//                   type="button"
//                   variant="secondary"
//                   onClick={() => {
//                     setEditing(null);
//                     setName('');
//                     setDesc('');
//                     setPrice('');
//                   }}
//                 >
//                   Cancelar Edição
//                 </Button>
//               )}
//             </div>
//           </form>
//         </CardContent>
//       </Card>

//       {/* Lista de Produtos */}
//       <div className="space-y-4">
//         {products.map((product) => (
//           <Card key={product.id} className="shadow-md hover:shadow-lg">
//             <CardHeader>
//               <CardTitle>{product.name}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="flex justify-between items-center">
//                 <div>
//                   <p className="text-sm text-gray-600">{product.desc}</p>
//                   <p className="font-semibold">R$ {product.price.toFixed(2)}</p>
//                 </div>
//                 <div className="flex space-x-2">
//                   <Button variant="outline" size="sm" onClick={() => handleEdit(product)}>
//                     Editar
//                   </Button>
//                   <Button size="sm" onClick={() => handleDelete(product.id)}>
//                     Excluir
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }
