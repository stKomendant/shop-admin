import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "@/app/components/Navbar/Navbar";
import Home from "@/app/pages/Home/Home";
import Cart from "@/app/pages/Сart/Cart";
import Product from "@/app/pages/Product/Product";

import type { typeProduct } from "@/app/types/typeProduct";

function App() {
  const [cart, setCart] = useState<typeProduct[]>([]);

  const addToCart = (product: typeProduct) => {
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
        <Route
          path="/product/:id"
          element={<Product addToCart={addToCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
