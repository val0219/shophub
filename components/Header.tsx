"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalItems } = useCart();
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <Link href="/" className="font-bold text-xl">ShopHub</Link>
      <span>🛒 {totalItems}</span>
    </header>
  );
}
