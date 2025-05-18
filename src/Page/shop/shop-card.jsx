import { useState } from "react";
import ImageComponent from "../../component/image/ImageComponent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../feature/leafSlice";

export const ShopCard = ({ id, item }) => {
  const [isFavorite, setIsFavorite] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddFavorite = (e, id) => {
    e.stopPropagation();
    if (isFavorite.includes(id)) {
      setIsFavorite(isFavorite.filter((favId) => favId !== id));
    } else {
      setIsFavorite([...isFavorite, id]);
    }
  };

  const showProductDetails = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  return (
    <div
      onClick={() => showProductDetails(id)}
      className="p-3 cursor-pointer shadow-2xl relative rounded-xl"
    >
      <ImageComponent src={item?.image} cardCss="w-full h-[40vh]" />

      <div className="absolute top-4 right-4">
        <FavoriteIcon
          className="cursor-pointer"
          onClick={(e) => handleAddFavorite(e, id)}
          style={{
            width: "30px",
            height: "30px",
            fill: isFavorite.includes(id) ? "green" : "white",
          }}
        />
      </div>

      <div className="px-2 pt-2">
        <h3 className="text-center text-xl">{item?.name || "Product Name"}</h3>
        <p className="text-center text-gray-600">₹{item?.price || "0.00"}</p>
        <button
          onClick={handleAddToCart}
          className="bg-blue-800 w-full text-white mt-2 py-2 rounded-md flex justify-center items-center gap-2"
        >
          Add To Cart <ShoppingCartCheckoutIcon />
        </button>
      </div>
    </div>
  );
};
