import type { Product } from "@/app/types/product";

type Props = {
  cart: Product[];
};

const Cart = ({ cart }: Props) => {
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
