import { useState } from "react";
import Navbar from "@/app/components/Navbar/Navbar";
import Home from "@/app/pages/Home/Home";
import type { Product } from "@/app/types/product";

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartCount={cart.length} />

      <Home addToCart={addToCart} />
    </div>
  );
}

export default App;
