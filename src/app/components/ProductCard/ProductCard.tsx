import type { typeProduct } from "../../types/typeProduct";
import { Link } from "react-router-dom";
type Props = {
  product: typeProduct;
  addToCart: (product: typeProduct) => void;
};

const ProductCard = ({ product, addToCart }: Props) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          className="w-full h-40 object-cover rounded cursor-pointer"
        />
      </Link>

      <h3 className="mt-3 font-semibold">{product.name}</h3>

      <p className="text-violet-600 font-bold">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-violet-600 text-white py-2 rounded cursor-pointer"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
