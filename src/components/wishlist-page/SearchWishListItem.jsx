import { Command, Search } from "lucide-react";
import { memo, useEffect, useRef } from "react";
import useWishListStore from "../../store/useWishListStore";

const MemoSearch = memo(Search);
const MemoCommand = memo(Command);
function onKeyDownListner(event) {
  if ((event.ctrlKey || event.metaKey) && event.key === "k") {
    searchInputRef.current.focus();
  }
  if (event.key === "Escape") {
    console.log("esc");
    searchInputRef.current.blur();
  }
}

export default function SearchWishListItem() {
  //   console.log("Wishlist page rendering");
  const searchWishListItems = useWishListStore(
    (state) => state.searchWishListItems
  );
  const setDataToProducts = useWishListStore(
    (state) => state.setDataToProducts
  );

  const searchInputRef = useRef();

  // Add an window event listne in entire dom to focus this input search with key
  useEffect(() => {
    console.log("search - ", searchInputRef.current.value);
    function onKeyDownListner(event) {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        searchInputRef.current.focus();
      }
      if (event.key === "Escape") {
        searchInputRef.current.blur();
      }
    }
    // Add the event lisner on mount
    window.addEventListener("keydown", onKeyDownListner);

    // Remove the lisner on unmount
    return () => {
      window.removeEventListener("keydown", onKeyDownListner);
      // This is so damn powerful
      setDataToProducts(); // Setting data to actuall products (all products) at unmount
    };
  }, []);
  return (
    <div className="flex gap-2 border-gray-200 rounded-md bg-gray-200 px-2 py-1 items-center">
      <MemoSearch size={28} strokeWidth={1.75} className="text-gray-400" />
      {/* <MemoCommand size={20} strokeWidth={1.75} className="text-gray-400" /> */}
      <input
        type="text"
        placeholder="cmd + k"
        className="outline-none text-gray-700 placeholder-gray-400"
        onChange={(e) => searchWishListItems(e.target.value)}
        ref={searchInputRef}
      />
    </div>
  );
}
