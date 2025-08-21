import { create } from "zustand";
import products from "../data/products.json";

const useWishListStore = create((set) => {
  return {
    wishListItems: products,
    searchWishListItems: (query) =>
      set((state) => {
        // console.log("searching...");
        // console.log("inside search func", state.wishListItems);
        if (query.length !== 0) {
          const matchedItems = products.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
          );
          return {
            wishListItems: [...matchedItems],
          };
        } else return { wishListItems: products };
      }),
  };
});

export default useWishListStore;
