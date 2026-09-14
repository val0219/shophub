import { Product } from "@/types/product";
import AddToCartButton from "@/components/AddToCartButton";
import Link from "next/link";

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Volver al catálogo
      </Link>

      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-64 object-cover rounded my-4"
      />

      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-gray-500">{product.category}</p>
      <p className="my-3">{product.description}</p>
      <p className="font-bold text-lg">
        ${product.price} — Stock: {product.stock}
      </p>

      <AddToCartButton product={product} />
    </main>
  );
}
