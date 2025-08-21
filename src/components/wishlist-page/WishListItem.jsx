export default function ({ image, name, description, price }) {
  let consizeTitle = name;
  if (name.length > 30) {
    consizeTitle = name.slice(0, 30) + "...";
  }
  return (
    <div className="p-4 border-2 border-gray-200 flex flex-col justify-between rounded-xl">
      <div className="aspect-square overflow-hidden rounded-lg ">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-125 transition-scale ease-in-out duration-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-bold">{consizeTitle}</p>
        <span className="font-bold">{price}</span>
        <button className="w-full py-4 bg-yellow-400 rounded-lg text-xl cursor-pointer hover:bg-yellow-500 transition-colors duration-300 ease-in-out">
          Add to cart
        </button>
      </div>
    </div>
  );
}
