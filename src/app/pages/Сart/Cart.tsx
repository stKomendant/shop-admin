import type { Product } from "@/app/types/product";

type Props = {
  cart: Product[];
  removeFromCart: (id: number) => void;
};

const Cart = ({ cart, removeFromCart }: Props) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow flex items-center gap-4"
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
                className="ml-auto bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6 text-xl font-bold">Total: ${totalPrice}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
