import { useParams } from "react-router-dom";
import { products } from "@/app/data/products";

import type { typeProduct } from "@/app/types/typeProduct";

type Props = {
  addToCart: (product: typeProduct) => void;
};

const Product = ({ addToCart }: Props) => {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-8">
      <div className="bg-white p-6 rounded-lg shadow flex gap-8">
        <img src={product.image} className="w-64 h-64 object-cover rounded" />

        <div>
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>

          <p className="text-violet-600 text-xl mb-4">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-violet-600 text-white px-6 py-2 rounded cursor-pointer"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
