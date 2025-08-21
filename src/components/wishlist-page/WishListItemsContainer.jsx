import WishListItem from "./WishListItem";
import data from "../../data/products.json";

export default function () {
  return (
    <div className="grid md:grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-5">
      {data.map((item) => (
        <WishListItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
        />
      ))}
      {/* <WishListItem />
      <WishListItem />
      <WishListItem />
      <WishListItem />
      <WishListItem /> */}
    </div>
  );
}
