"use client";

import { useEffect, useRef, useState } from "react";
import { Product } from "@/src/types/products";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Label } from "@/src/components/ui/label";
import { Input } from "@/src/components/ui/input";
import { uploadImage } from "@/src/services/products/upload-image";

export default function DashboardPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [editing, setEditing] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [imageFront, setImageFront] = useState<File | null>(null);
  const [imageBack, setImageBack] = useState<File | null>(null);

  const imageFrontRef = useRef<HTMLInputElement | null>(null);
  const imageBackRef = useRef<HTMLInputElement | null>(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      if (!res.ok) throw new Error("Erro ao carregar os produtos");
      const data = await res.json();
      setProducts(data);
    } catch (err: any) {
      setError(err.message || "Erro desconhecido ao buscar produtos");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let image_front_url = editing?.image_front_url || "";
    let image_back_url = editing?.image_back_url || "";

    if (imageFront) {
      const uploadedFront = await uploadImage(imageFront, Date.now());
      if (!uploadedFront) {
        setError("Falha ao enviar imagem da frente");
        return;
      }
      image_front_url = uploadedFront;
    }

    if (imageBack) {
      const uploadedBack = await uploadImage(imageBack, Date.now() + 1);
      if (!uploadedBack) {
        setError("Falha ao enviar imagem de costas");
        return;
      }
      image_back_url = uploadedBack;
    }

    const productData = { name, desc, price: parseFloat(price), image_front_url, image_back_url};

    try {
      const response = await fetch("/api/products", {
        method: editing ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          editing ? { id: editing.id, ...productData } : productData
        ),
      });

      if (!response.ok) throw new Error("Erro ao salvar o produto");

      setName("");
      setDesc("");
      setPrice("");
      setImageFront(null);
      setImageBack(null);
      imageFrontRef.current && (imageFrontRef.current.value = "");
      imageBackRef.current && (imageBackRef.current.value = "");
      setEditing(null);
      setError(null);

      await fetchProducts();
    } catch (error: any) {
      setError(error.message || "Erro ao salvar o produto");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch("/api/products", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) throw new Error("Erro ao excluir o produto");

      await fetchProducts();
    } catch (error: any) {
      setError(error.message || "Erro ao excluir o produto");
    }
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

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>
            {editing ? "Editar Produto" : "Adicionar Produto"}
          </CardTitle>
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
            <div>
              <Label htmlFor="imageFront">Imagem da Frente</Label>
              <Input
                id="imageFront"
                type="file"
                accept="image/*"
                onChange={(e) => setImageFront(e.target.files?.[0] || null)}
                ref={imageFrontRef}
              />
            </div>
            <div>
              <Label htmlFor="imageBack">Imagem de Costas</Label>
              <Input
                id="imageBack"
                type="file"
                accept="image/*"
                onChange={(e) => setImageBack(e.target.files?.[0] || null)}
                ref={imageBackRef}
              />
            </div>
            <div className="flex space-x-4">
              <Button type="submit">
                {editing ? "Atualizar" : "Adicionar"}
              </Button>
              {editing && (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    setEditing(null);
                    setName("");
                    setDesc("");
                    setPrice("");
                    setImageFront(null);
                    setImageBack(null);
                    imageFrontRef.current && (imageFrontRef.current.value = "");
                    imageBackRef.current && (imageBackRef.current.value = "");
                  }}
                >
                  Cancelar
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Lista */}
      <div className="space-y-4">
        {products.length === 0 ? (
          <p className="text-gray-500">Nenhum produto encontrado.</p>
        ) : (
          products.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-start">
                    {product.image_front_url && (
                      <div className="relative w-20 h-20 group">
                        <img
                          src={product.image_front_url}
                          alt="Frente"
                          className="absolute top-0 left-0 w-full h-full object-cover rounded transition-opacity duration-300 group-hover:opacity-0"
                        />
                        <img
                          src={product.image_back_url}
                          alt="Costas"
                          className="absolute top-0 left-0 w-full h-full object-cover rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-gray-600">{product.desc}</p>
                      <p className="font-semibold">
                        R$ {product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(product)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(product.id)}
                    >
                      Excluir
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
