import { Ellipsis, LayoutGrid, LayoutList, Search, Share2 } from "lucide-react";
import WishListItemsContainer from "../components/wishlist-page/WishListItemsContainer";
import useWishListStore from "../store/useWishListStore";
import { memo } from "react";
import SearchWishListItem from "../components/wishlist-page/SearchWishListItem";

// you can optimize those icons
const MemoEllipsis = memo(Ellipsis);
const MemoShare2 = memo(Share2);
const MemoLayoutGrid = memo(LayoutGrid);
const MemoLayoutList = memo(LayoutList);

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
            <div className="flex gap-0.5 justify-center items-center cursor-pointer">
              <MemoShare2 strokeWidth={1.75} width={14} color="#2b7fff" />
              <p className="text-blue-500 text-sm">Send list to others</p>
            </div>
            <MemoEllipsis
              size={24}
              strokeWidth={1.75}
              className="cursor-pointer"
            />
          </div>
        </div>
        {/*  */}
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="cursor-pointer bg-yellow-100 p-2">
              <MemoLayoutGrid size={22} strokeWidth={1.75} />
            </div>
            <div className="cursor-pointer  p-2">
              <MemoLayoutList size={22} strokeWidth={1.75} />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <SearchWishListItem />
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
