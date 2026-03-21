import { Link } from "react-router-dom";

type Props = {
  cartCount: number;
};

const Navbar = ({ cartCount }: Props) => {
  return (
    <div className="w-full h-16 flex items-center justify-between px-8 border-b bg-white">
      <Link to="/" className="text-xl font-bold text-violet-700">
        React Shop
      </Link>

      <Link to="/cart">
        <button className="cursor-pointer bg-violet-600 text-white px-4 py-2 rounded">
          Cart ({cartCount})
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
