import WishListItem from "./WishListItem";
import data from "../../data/products.json";
import useWishListStore from "../../store/useWishListStore";

export default function () {
  const wishListItems = useWishListStore((state) => state.wishListItems);
  //   console.log("Items container rendering");

  if (wishListItems.length !== 0) {
    return (
      <div className="grid md:grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-5">
        {wishListItems.map((item) => (
          <WishListItem
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex justify-center mt-20">
        <p className="text-xl">{"No items found :("}</p>
      </div>
    );
  }
}
