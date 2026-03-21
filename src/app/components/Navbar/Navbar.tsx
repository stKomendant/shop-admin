const Navbar = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between p-8 border-b bg-white">
      <h1 className="text-xl font-bold text-violet-700"> React Shop</h1>
      <button className="text-white bg-violet-400 px-5 py-2 rounded">
        {" "}
        Cart
      </button>
    </div>
  );
};

export default Navbar;
