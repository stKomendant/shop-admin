import type { Product } from "@/app/types/product";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <img src={product.image} className="w-full h-40 object-cover rounded" />

      <h3 className="mt-3 font-semibold">{product.name}</h3>

      <p className="text-violet-600 font-bold">${product.price}</p>

      <button className="mt-3 w-full bg-violet-600 text-white py-2 rounded">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
