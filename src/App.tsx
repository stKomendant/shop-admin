import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "@/app/components/Navbar/Navbar";
import Home from "@/app/pages/Home/Home";
import Cart from "@/app/pages/Сart/Cart";

import type { Product } from "@/app/types/product";

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />

        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
