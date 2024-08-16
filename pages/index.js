import Head from 'next/head';
import Image from 'next/image';
import products from '../products.json';

function ProductCard({ product }) {
  return (
    <div className="flex flex-col justify-center p-4">
      <Image src={product.image} alt={product.name} width={300} height={300} />
      <h2 className="text-lg">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-bold">${product.price}</p>
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => console.log(`Add to cart: ${product.name}`)}
      >
        Add to Cart
      </button>
    </div>
  );
}

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Shopping Cart App</title>
      </Head>
      <h1 className="text-3xl font-bold">Product Listing</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;