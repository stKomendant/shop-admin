import { useParams } from "react-router-dom";
import { products } from "@/app/data/products";
import type { typeProduct } from "@/app/types/typeProduct";

type Props = {
  addToCart: (product: typeProduct) => void;
};

const ProductPage = ({ addToCart }: Props) => {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-8 flex justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-5xl w-full grid md:grid-cols-2 gap-10">
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            className="w-80 h-80 object-cover rounded-xl transition duration-300 hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>

          <p className="text-gray-500 mb-6">
            Premium quality product. Clean design. Built for modern users.
          </p>

          <p className="text-2xl font-bold text-violet-600 mb-6">
            ${product.price}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-gradient-to-r from-violet-600 to-purple-500 text-white py-3 rounded-xl text-lg font-semibold transition hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
