const { create } = require("zustand");

const item = {
  id: "1",
  name: "Redragon K617 Fizz 60% Wired RGB Gaming Keyboard",
  description:
    "61 Keys Compact Mechanical Keyboard w/White and Grey Color Keycaps, Linear Red Switch, Pro Driver/Software Supported",
  price: 2290.0,
  image:
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
  count: 1, // we need to pass this count (extra)
};
const useCartStore = create((set) => {
  return {
    cartItems: [], // main state

    // add 1 item or increment count 1 of the item

    addToCart: (newItem) =>
      set((state) => {
        // check if the item already present in the cart
        const foundItem = state.cartItems.find(
          (item) => item.id === newItem.id
        );
        if (foundItem) {
          // the whole state object should be returned
          // and we need to change a specific item of obj of the array
          const newCartItems = state.cartItems.map((item) => {
            return item.id === newItem.id
              ? { ...item, count: item.count + 1 }
              : item;
          });

          return {
            cartItems: newCartItems,
          };
        } else {
          return {
            // add the fresh item with count 1
            cartItems: [...state.cartItems, { ...newItem, count: 1 }],
          };
        }
      }),

    // delete 1 item count or delete the whole item object if count is 1

    deleteFromCart: (selectedItemId) =>
      set((state) => {
        const foundItem = state.cartItems.find(
          (item) => item.id === selectedItemId
        );
        // the found item should be there (so no point to check if not found item)

        if (foundItem?.count === 1) {
          return {
            cartItems: state.cartItems.filter(
              (item) => item.id !== selectedItemId
            ),
          };
        }
        if (foundItem?.count > 1) {
          const newCartItems = state.cartItems.map((item) => {
            return item.id === selectedItemId
              ? { ...item, count: item.count - 1 }
              : item;
          });

          return {
            cartItems: newCartItems,
          };
        } else {
          console.log(
            "Check the state action deleteFromCount Function: item should have 1 or more count"
          );
          return { cartItems: state.cartItems };
        }
      }),
  };
});

export default useCartStore;
