import type { Product } from "../../types/product";

type Props = {
  product: Product;
  addToCart: (product: Product) => void;
};

const ProductCard = ({ product, addToCart }: Props) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <img src={product.image} className="w-full h-40 object-cover rounded" />

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
