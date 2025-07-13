import Link from "next/link";


export async function generateStaticParams() {
  const productIds = ["1", "2", "3"]; 

  return productIds.map((id) => ({
    id,
  }));
}

export default async function ProductPage({ params }) {
  const { id } = await params; 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Product Page</h1>
      <p className="mt-4">Product ID: {id}</p>
      <Link href={`/products`} className="absolute top-5 right-5 text-blue-600 hover:underline">
        Go to Product List
      </Link>
    </div>
  );
}
