import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";

async function getProducts(): Promise<Product[]> {
  const res = await fetch(
    "https://dummyjson.com/products?limit=8&select=id,title,price,category,thumbnail,stock"
  );
  const data = await res.json();
  return data.products;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Catálogo</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
