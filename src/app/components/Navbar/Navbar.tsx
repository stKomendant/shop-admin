import { Link } from "react-router-dom";

type Props = {
  cartCount: number;
};

const Navbar = ({ cartCount }: Props) => {
  return (
    <div className="w-full h-16 flex items-center justify-between px-8 border-b bg-white shadow-sm">
      <Link to="/" className="text-xl font-bold text-violet-700">
        <h1 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-500 text-transparent bg-clip-text">
          React Shop
        </h1>
      </Link>

      <Link to="/cart">
        <button className="bg-gradient-to-r from-violet-600 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold transition hover:opacity-90 cursor-pointer">
          Cart ({cartCount})
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
