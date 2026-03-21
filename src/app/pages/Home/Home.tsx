import ProductCard from "@/app/components/ProductCard/ProductCard";
import { products } from "@/app/data/products";
import type { Product } from "@/app/types/product";

const Home = () => {
  return (
    <div className="p-8 grid grid-cols-4 gap-6">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
