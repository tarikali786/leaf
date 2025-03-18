import { useEffect, useState } from "react";
import ImageComponent from "../../component/image/ImageComponent";
import { Link } from "react-router-dom";

export const OrderDetailsCard = ({ id }) => {
  return (
    <Link to={`/order-details/${id}`} className="p-3 shadow-2xl  rounded-xl">
      <ImageComponent cardCss="w-full h-[26vh]" />

      <div className="px-2 pt-2 text-center">
        <h3 className=" text-xl">GS-4322</h3>
        <b>1200</b>
      </div>
    </Link>
  );
};
