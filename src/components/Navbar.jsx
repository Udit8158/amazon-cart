import { ShoppingCart } from "lucide-react";
import cartIcon from "../assets/shopping-cart.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-20 py-6 bg-gray-800 text-white">
      <p className="text-4xl font-bold cursor-pointer">amazon.in</p>
      <div className="flex items-center space-x-4 relative">
        <p>Hello user</p>
        <ShoppingCart size={28} strokeWidth={1.75} />
        <span className="w-5 h-5 text-sm bg-orange-400 text-black rounded-full flex justify-center items-center absolute top-0 right-1">
          4
        </span>
      </div>
    </nav>
  );
}
