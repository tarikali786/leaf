import { useEffect, useState } from "react";
import ImageComponent from "../../component/image/ImageComponent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
export const ShopCard = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState([]);
  const handleAddFavorite = (id) => {
    if (isFavorite.includes(id)) {
      setIsFavorite(isFavorite.filter((item) => item !== id));
    } else {
      setIsFavorite(isFavorite.concat(id));
    }
  };

  return (
    <Link to={`/product/${id}`} className="p-3 shadow-2xl relative rounded-xl">
      <ImageComponent cardCss="w-full h-[40vh]" />
      <div className=" absolute top-4 right-4">
        <FavoriteIcon
          className=" cursor-pointer"
          onClick={() => handleAddFavorite(id)}
          style={{
            width: "30px",
            height: "30px",
            color: "",
            fill: isFavorite.includes(id) ? "green" : "white",
          }}
        />
      </div>
      <div className="px-2 pt-2">
        <h3 className="text-center text-xl ">GS-4322</h3>
        <button className="bg-blue-800 w-full text-white mt-2 py-1.5 rounded-md cursor-pointer">
          Add To Cart <ShoppingCartCheckoutIcon className="ml-6" />
        </button>
      </div>
    </Link>
  );
};
