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
      <Link
        href="/"
        className="text-blue-600 hover:underline inline-flex items-center gap-1 mb-4"
      >
        ← Volver al catálogo
      </Link>

      <div className="bg-white border rounded-lg shadow-md p-6">
        <div className="w-full h-64 flex items-center justify-center bg-gray-50 rounded mb-4 overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-500 capitalize mb-3">{product.category}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>

        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <p className="font-bold text-2xl">${product.price}</p>
            <p className="text-sm text-gray-500">Stock: {product.stock}</p>
          </div>
        </div>

        <AddToCartButton product={product} />
      </div>
    </main>
  );
}
