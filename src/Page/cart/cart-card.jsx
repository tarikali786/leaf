import { useEffect, useState } from "react";
import ImageComponent from "../../component/image/ImageComponent";
import { Link } from "react-router-dom";

export const CartCard = ({ id, item }) => {
  return (
    <>
      <Link
        to={`/product/${item?.documentId}`}
        className="p-3 shadow-2xl  rounded-xl"
      >
        <div className="flex justify-center items-center gap-3">
          {item?.image &&
            item?.image.length > 0 &&
            item?.image?.map((img, index) => (
              <ImageComponent
                key={index}
                src={`${import.meta.env.VITE_Image_BASE_URL}${
                  img.formats.thumbnail.url
                }`}
                cardCss="w-full xl:h-[36vh] md:h-[25vh] h-[12vh] bg-gray-200 rounded-lg p-4"
              />
            ))}
        </div>
      </Link>
      <div className="px-2 pt-2">
        <h3 className="text-center  flex items-center justify-between ">
          <p>
            {" "}
            ₹ <b>{item?.OrigialPrice}</b>
          </p>{" "}
          <p>{item?.title}</p>
        </h3>
        <div className="flex items-center justify-between mt-2 ">
          <Link
            to="/order"
            className="bg-blue-800  text-center w-full text-white mt-2 py-2 rounded-md cursor-pointer"
          >
            Order Now
          </Link>
        </div>
      </div>
    </>
  );
};
