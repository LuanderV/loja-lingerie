'use client'

import { useState } from 'react'

interface ProductDetailsClientProps {
  name: string
  price: number
  desc: string
}

export default function ProductDetailsClient({
  name,
  price,
  desc,
}: ProductDetailsClientProps) {
  const [count, setCount] = useState(1)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="flex-1">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">{name}</h1>

      <div className="flex items-center gap-2 mb-1">
        <span className="text-gray-400 line-through text-sm">R$ 299,90</span>
        <span className="text-pink-600 font-bold text-xl">
          R$ {price.toFixed(2)}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Em até 3x R$ {(price / 3).toFixed(2)} sem juros
      </p>

      <div className="mb-4">
        <p className="text-sm font-medium mb-2">Cor</p>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-[#1c2b4a] border-2 border-gray-300" />
          <button className="w-8 h-8 rounded-full bg-[#c18ab4] border-2 border-gray-300" />
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-medium mb-2">Tamanho</p>
        <div className="flex gap-2">
          {['M', 'G', 'GG'].map((size) => (
            <button
              key={size}
              className="border rounded-full px-4 py-1 text-sm font-medium text-gray-700 hover:border-pink-600 transition"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <span className="font-medium">Quantidade:</span>
        <div className="flex items-center border rounded-md overflow-hidden w-fit">
          <button onClick={decrement} className="px-3 py-1 hover:bg-gray-100">-</button>
          <span className="px-4">{count}</span>
          <button onClick={increment} className="px-3 py-1 hover:bg-gray-100">+</button>
        </div>
      </div>

      <div className="text-sm text-gray-700">
        <p className="font-semibold mb-1">Descrição</p>
        <p>{desc}</p>
      </div>
    </div>
  )
}
