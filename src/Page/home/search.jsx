import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
export const Search = () => {
  return (
    <div className="bg-white md:w-[60%] w-full mt-10 rounded-xl flex justify-between items-center pl-4 pr-1 md:py-3 py-2">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="outline-none w-[90%] md:text-[18px] text-gray-800"
      />
      <SearchRoundedIcon
        className="bg-[var(--color-primary)] rounded-lg px-1 cursor-pointer "
        style={{ fontSize: "30px", width: "38px", height: "34px" }}
      />
    </div>
  );
};
