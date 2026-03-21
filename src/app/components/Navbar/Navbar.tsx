import { Link } from "react-router-dom";

type Props = {
  cartCount: number;
};

const Navbar = ({ cartCount }: Props) => {
  return (
    <div className="w-full h-16 flex items-center justify-between px-8 border-b ">
      <Link to="/" className=" text-xl font-bold text-violet-700">
        React Shop
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/login">
          <button className="cursor-pointer px-4 py-2 rounded-lg border border-violet-500 text-violet-600 hover:bg-violet-50 transition">
            Login
          </button>
        </Link>

        <Link to="/cart">
          <button className="bg-gradient-to-r from-violet-600 to-purple-500 text-white px-4 py-2 rounded-lg cursor-pointer">
            Cart ({cartCount})
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
