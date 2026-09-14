"use client";
import Link from "next/link";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col">
      <Link href={`/productos/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-40 object-cover rounded"
        />
        <h2 className="font-semibold mt-2">{product.title}</h2>
        <p className="text-sm text-gray-500">{product.category}</p>
      </Link>
      <p className="font-bold mt-1">${product.price}</p>
      <p className="text-xs text-gray-500">Stock: {product.stock}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
