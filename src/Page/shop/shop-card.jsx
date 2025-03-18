import { useEffect, useState } from "react";
import ImageComponent from "../../component/image/ImageComponent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
export const ShopCard = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState([]);
  const naviagte = useNavigate();
  const handleAddFavorite = (e, id) => {
    e.stopPropagation();

    if (isFavorite.includes(id)) {
      setIsFavorite(isFavorite.filter((item) => item !== id));
    } else {
      setIsFavorite(isFavorite.concat(id));
    }
  };
  const showProductDetails = ({ id }) => {
    naviagte(`/product/${id}`);
  };
  return (
    <div
      onClick={() => showProductDetails(id)}
      className="p-3 cursor-pointer shadow-2xl relative rounded-xl"
    >
      <ImageComponent cardCss="w-full h-[40vh]" />
      <div className=" absolute top-4 right-4">
        <FavoriteIcon
          className=" cursor-pointer"
          onClick={(e) => handleAddFavorite(e, id)}
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
        <button className="bg-blue-800 w-full text-white mt-2 py-2 rounded-md cursor-pointer">
          Add To Cart <ShoppingCartCheckoutIcon className="ml-6" />
        </button>
      </div>
    </div>
  );
};
