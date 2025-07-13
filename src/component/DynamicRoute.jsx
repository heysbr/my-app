import Link from "next/link";

export default function DynamicRoute() {
  const products = [1, 2, 3, 4]; // Example product IDs

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul>
        {products.map((id) => (
          <li key={id} className="mb-2">
            <Link href={`/products/${id}`} className="text-blue-600 hover:underline">
              Go to Product {id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
