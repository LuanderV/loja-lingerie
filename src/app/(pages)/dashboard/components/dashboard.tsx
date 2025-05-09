'use client';
import { useState } from 'react';
import { Product } from '@/src/types/products';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/src/components/ui/input';

type Props = {
  initialProducts: Product[];
  onAdd: (product: Omit<Product, 'id'>) => void;
  onUpdate: (product: Product) => void;
  onDelete: (id: string) => void;
};

export default function DashboardClient({
  initialProducts,
  onAdd,
  onUpdate,
  onDelete,
}: Props) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [editing, setEditing] = useState<Product | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = { name, desc, price: parseFloat(price) };

    if (editing) {
      const updated = { ...editing, ...newProduct };
      await onUpdate(updated);
      setProducts((prev) =>
        prev.map((p) => (p.id === updated.id ? updated : p))
      );
    } else {
      const created = await onAdd(newProduct);
      if (created) setProducts((prev) => [...prev, created]);
    }

    setName('');
    setDesc('');
    setPrice('');
    setEditing(null);
  };

  const handleDelete = async (id: string) => {
    await onDelete(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleEdit = (product: Product) => {
    setEditing(product);
    setName(product.name);
    setDesc(product.desc);
    setPrice(product.price.toString());
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Dashboard de Produtos</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{editing ? 'Editar Produto' : 'Adicionar Produto'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="desc">Descrição</Label>
              <Input
                id="desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="price">Preço</Label>
              <Input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="flex space-x-4">
              <Button type="submit">
                {editing ? 'Atualizar Produto' : 'Adicionar Produto'}
              </Button>
              {editing && (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    setEditing(null);
                    setName('');
                    setDesc('');
                    setPrice('');
                  }}
                >
                  Cancelar Edição
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-600">{product.desc}</p>
                  <p className="font-semibold">R$ {product.price.toFixed(2)}</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(product)}>
                    Editar
                  </Button>
                  <Button size="sm" onClick={() => handleDelete(product.id)}>
                    Excluir
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
