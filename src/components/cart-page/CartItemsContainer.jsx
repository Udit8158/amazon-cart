import { memo } from "react";
import useCartStore from "../../store/useCartStore";
import CartItem from "./CartItem";

const MemorizedCartItem = memo(CartItem);

export default memo(function CartItemsConainer() {
  const cartItems = useCartStore((state) => state.cartItems);

  console.log(cartItems);
  return (
    <div className=" bg-white py-10 px-5 flex flex-col gap-5 rounded-2xl">
      <p className="text-2xl font-bold">Shopping Cart</p>
      <div className="flex flex-col gap-3">
        {cartItems.length !== 0 ? (
          cartItems.map((item) => (
            <CartItem
              name={item.name}
              key={item.id}
              id={item.id}
              image={item.image}
              price={item.price}
              count={item.count}
            />
          ))
        ) : (
          <p>No items in cart :(</p>
        )}
      </div>
    </div>
  );
});
