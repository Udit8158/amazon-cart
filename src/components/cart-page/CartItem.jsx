import { memo } from "react";
import useCartStore from "../../store/useCartStore";

export default memo(function CartItem({ id, name, image, count, price }) {
  const incrementCartItem = useCartStore((state) => state.addToCart);
  const decrementCartItem = useCartStore((state) => state.deleteFromCart);
  const deleteAllInSingleItem = useCartStore((state) => state.deleteFromCart);
  return (
    <div className="flex justify-between items-center bg-gray-50 rounded-2xl p-2">
      <div className="flex gap-3">
        <div className="w-30 h-30 ">
          <img src={image} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col  justify-between">
          <div className="flex flex-col gap-1">
            <p className="font-bold">{name}</p>
            <span className="text-green-600">In Stock</span>
          </div>
          <div className="flex gap-2 items-center">
            <button
              className="px-2 py-0.5 bg-gray-200 rounded-md "
              onClick={() => decrementCartItem({ selectedItemId: id })}
            >
              -
            </button>
            <span>{count}</span>
            <button
              className="px-2 py-0.5 bg-gray-200 rounded-md "
              onClick={() =>
                incrementCartItem({ name, id, image, count, price })
              }
            >
              +
            </button>
            <button
              className="p-2 text-blue-600"
              onClick={() =>
                deleteAllInSingleItem({ selectedItemId: id, deleteAll: true })
              }
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <p className="text-lg font-bold">{price}</p>
    </div>
  );
});
