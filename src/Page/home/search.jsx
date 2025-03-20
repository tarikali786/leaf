import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
export const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const [itemListShow, setItemListShow] = useState(false);
  const { product } = useSelector((state) => state.leaf);
  const handleOnchange = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredProduct = useMemo(() => {
    if (!searchValue.trim()) {
      return null;
    }

    const lowercasedSearch = searchValue?.toLowerCase();

    return product
      .filter((item) => item?.name?.toLowerCase().includes(lowercasedSearch))
      .slice(0, 6);
  }, [searchValue]);

  return (
    <div
      onMouseEnter={() => setItemListShow(true)}
      onMouseLeave={() => setItemListShow(false)}
      className=" relative bg-white md:w-[60%] w-full mt-10 rounded-xl flex justify-between items-center pl-4 pr-1 md:py-3 py-2"
    >
      <input
        type="text"
        placeholder="What are you looking for?"
        className="outline-none w-[90%] md:text-[18px] text-gray-800"
        onChange={handleOnchange}
      />
      <SearchRoundedIcon
        className="bg-[var(--color-primary)] rounded-lg px-1 cursor-pointer "
        style={{ fontSize: "30px", width: "38px", height: "34px" }}
      />

      {itemListShow && (
        <div className="absolute bg-white w-full z-10 mt-2 top-13 left-0 rounded-xl shadow-lg">
          {filteredProduct?.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center px-4 py-2"
            >
              <p className="border-b border-gray-300 py-2 w-full cursor-pointer">
                {item ?? "Hellp"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
