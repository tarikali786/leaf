import { useEffect, useState } from "react";
import ImageComponent from "../../component/image/ImageComponent";
import { Link } from "react-router-dom";

export const CartCard = ({ id, setOrderValue }) => {
  const handleOderSubmit = (e) => {
    e?.stopPropagation();
    setOrderValue(1);
  };
  return (
    <div className="p-3 shadow-2xl  rounded-xl">
      <Link to={`/product/${id}`}>
        <ImageComponent cardCss="w-full h-[26vh]" />
      </Link>

      <div className="px-2 pt-2">
        <h3 className="text-center text-xl">GS-4322</h3>
        <button
          onClick={(e) => handleOderSubmit(e)}
          className="bg-blue-800 w-full text-white mt-2 py-2 rounded-md cursor-pointer"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};
