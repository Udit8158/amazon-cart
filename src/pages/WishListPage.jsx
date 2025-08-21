import { Ellipsis, LayoutGrid, LayoutList, Search, Share2 } from "lucide-react";
import WishListItemsContainer from "../components/wishlist-page/WishListItemsContainer";

export default function WishListPage() {
  return (
    <div className="grid md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_4fr] xl:grid-cols-[1fr_5fr]">
      {/* Left section */}
      <div className="p-2">
        <div className="flex flex-col gap-0.5 bg-gray-100 p-4 rounded-xl">
          <p className="text-xl xl:text-2xl font-bold">Your Wish List</p>
          <p className="text-sm font-extralight">Default list</p>
        </div>
      </div>
      {/* Right section */}
      <div className="px-4 py-6 flex flex-col gap-4">
        {/*  */}
        <div className="flex justify-between">
          <div>
            <p className="text-xl font-bold">Your Wish List</p>
            <p className="text-sm font-extralight">Public</p>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div className="flex gap-0.5 justify-center items-center">
              <Share2 strokeWidth={1.75} width={14} color="#2b7fff" />
              <p className="text-blue-500 text-sm">Send list to others</p>
            </div>
            <Ellipsis size={24} strokeWidth={1.75} />
          </div>
        </div>
        {/*  */}
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="cursor-pointer bg-yellow-100 p-2">
              <LayoutGrid size={22} strokeWidth={1.75} />
            </div>
            <div className="cursor-pointer  p-2">
              <LayoutList size={22} strokeWidth={1.75} />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 border-gray-200 rounded-md bg-gray-200 px-2 py-1 items-center">
              <Search size={28} strokeWidth={1.75} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <select className="bg-gray-200 px-2 py-1 rounded-md">
              <option>Filter & Sort</option>
            </select>
          </div>
        </div>
        {/*  */}
        <WishListItemsContainer />
      </div>
    </div>
  );
}
