import useCartStore from "../../store/useCartStore";

function calculateOrderValue(cartItems) {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.count * item.price;
  });
  return total;
}
export default function OrderSummary() {
  const cartItems = useCartStore((state) => state.cartItems);

  const orderValue = calculateOrderValue(cartItems);
  const numberOfItems = cartItems.length;

  return (
    <div className="bg-gray-200 py-10 px-5 rounded-2xl flex flex-col justify-between h-fit gap-6">
      <p className="text-2xl font-bold">Order Summary</p>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p>Items {numberOfItems}:</p>
          <p>{orderValue}</p>
        </div>
        <hr className="text-gray-800 block " />
        <div className="flex justify-between">
          <p className="font-bold text-lg">Order Total:</p>
          <p className="font-bold text-lg">{orderValue}</p>
        </div>
      </div>
      <button className="bg-yellow-400 rounded-lg text-xl cursor-pointer hover:bg-yellow-500 transition-colors duration-300 ease-in-out py-2">
        Proceed to Buy
      </button>
    </div>
  );
}
