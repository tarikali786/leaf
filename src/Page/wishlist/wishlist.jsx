import { useSelector } from "react-redux";
import { WishCard } from "./wish-card";

export const Wishlist = () => {
  const { wishList } = useSelector((state) => state.leaf);
  return (
    <div className="md:px-[10%] sm:px-[5%] px-2 py-4 mt-2   ">
      <h2 className="text-2xl font-semibold">Wishlist</h2>

      {wishList?.length == 0 ? (
        <div className="text-center h-[30vh] flex items-center justify-center">
          <p>Your wishlist is empty. Add some items to your wishlist.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-2  gap-6 mt-6">
          {wishList?.map((item, index) => (
            <WishCard key={index} id={index} />
          ))}
        </div>
      )}
    </div>
  );
};
