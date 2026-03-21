import ProductCard from "@/app/components/ProductCard/ProductCard";
import { products } from "@/app/data/products";
import type { typeProduct } from "@/app/types/typeProduct";

type Props = {
  addToCart: (product: typeProduct) => void;
};

const Home = ({ addToCart }: Props) => {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Home;
