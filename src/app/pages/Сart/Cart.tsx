import type { typeProduct } from "@/app/types/typeProduct";
import { useNavigate } from "react-router-dom";
type Props = {
  cart: typeProduct[];
  removeFromCart: (id: number) => void;
};

const Cart = ({ cart, removeFromCart }: Props) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const navigate = useNavigate();
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-violet-600 hover:underline cursor-pointer"
      >
        ← Back
      </button>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border-1 bg-fuchsia-200 p-4 rounded-lg shadow flex items-center gap-4"
            >
              <img
                src={item.image}
                className="w-20 h-20 object-cover rounded"
              />

              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-violet-600">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-auto bg-red-500 hover:bg-red-600 transition text-white px-3 py-1 rounded cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6 text-2xl font-bold text-violet-700">
            Total: ${totalPrice}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
