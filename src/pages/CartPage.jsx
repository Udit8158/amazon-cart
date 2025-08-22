import CartItemsConainer from "../components/cart-page/CartItemsContainer";
import OrderSummary from "../components/cart-page/OrderSummary";

export default function CartPage() {
  return (
    <div className="bg-gray-100 h-screen m-0 p-0">
      <div className="grid grid-cols-[3fr_1fr] gap-4 pt-6 px-2">
        <CartItemsConainer />
        <OrderSummary />
      </div>
    </div>
  );
}
