import type { typeProduct } from "@/app/types/typeProduct";
import { Link } from "react-router-dom";
type Props = {
  product: typeProduct;
  addToCart: (product: typeProduct) => void;
};

const ProductCard = ({ product, addToCart }: Props) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          className="w-full h-40 object-cover rounded transition duration-300 hover:scale-105"
        />
      </Link>

      <h3 className="mt-3 font-semibold">{product.name}</h3>

      <p className="text-violet-600 font-bold">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-gradient-to-r from-violet-600 to-purple-500 text-white py-2 rounded-lg font-semibold transition hover:opacity-90 cursor-pointer"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
