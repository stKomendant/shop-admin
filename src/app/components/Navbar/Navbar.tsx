const Navbar = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between px-8 border-b bg-white">
      <h1 className="text-xl font-bold text-violet-700">React Shop</h1>

      <button className="bg-violet-600 text-white px-4 py-2 rounded">
        Cart
      </button>
    </div>
  );
};

export default Navbar;
