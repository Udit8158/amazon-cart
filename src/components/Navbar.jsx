import { ShoppingCart } from "lucide-react";
import cartIcon from "../assets/shopping-cart.png";
import { memo } from "react";
import { Link } from "react-router";
import useCartStore from "../store/useCartStore";

const MemoShoppingCart = memo(ShoppingCart);

export default function Navbar() {
  const cartItems = useCartStore((state) => state.cartItems);
  return (
    <nav className="flex justify-between px-20 py-6 bg-gray-800 text-white">
      <Link to={"/wish-list"} className="text-4xl font-bold cursor-pointer">
        amazon.in
      </Link>
      <div className="flex items-center space-x-4 relative">
        <p>Hello user</p>
        <Link to="/cart">
          {" "}
          <MemoShoppingCart
            size={28}
            strokeWidth={1.75}
            className="cursor-pointer"
          />
        </Link>
        {cartItems.length > 0 && (
          <span className="w-5 h-5 text-sm bg-orange-400 text-black rounded-full flex justify-center items-center absolute top-0 right-1">
            {cartItems.length}
          </span>
        )}
      </div>
    </nav>
  );
}
