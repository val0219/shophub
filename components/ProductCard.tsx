"use client";
import Link from "next/link";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col bg-white">
      <Link href={`/productos/${product.id}`}>
        <div className="w-full h-40 flex items-center justify-center bg-gray-50 rounded overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <h2 className="font-semibold mt-2 hover:text-blue-600 transition-colors">
          {product.title}
        </h2>
        <p className="text-sm text-gray-500 capitalize">{product.category}</p>
      </Link>
      <div className="mt-auto pt-2">
        <p className="font-bold text-lg">${product.price}</p>
        <p className="text-xs text-gray-500 mb-2">Stock: {product.stock}</p>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-medium"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
