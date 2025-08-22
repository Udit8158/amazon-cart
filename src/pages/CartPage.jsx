import { Link } from "react-router";
import CartItemsConainer from "../components/cart-page/CartItemsContainer";
import OrderSummary from "../components/cart-page/OrderSummary";
import useCartStore from "../store/useCartStore";

export default function CartPage() {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <div className="bg-gray-100 h-screen m-0 p-0">
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-[3fr_1fr] gap-4 pt-6 px-2">
          <CartItemsConainer />
          <OrderSummary />
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <p className="text-3xl font-bold w-fit m-auto p-auto pt-20">
            Your Cart Is Empty :(
          </p>
          <Link
            to="/wish-list"
            className="py-2 w-fit px-10 mx-auto bg-yellow-400 rounded-lg text-xl cursor-pointer hover:bg-yellow-500 transition-colors duration-300 ease-in-out"
          >
            Add Item to Cart
          </Link>
        </div>
      )}
    </div>
  );
}
