import React from "react";
import { Link } from "react-router-dom";
import { CartCard } from "./cart-card";
import { useSelector } from "react-redux";

export const Cart = ({ setOrderValue }) => {
  const { cart } = useSelector((state) => state.leaf);

  return (
    <div className="bg-[#f5f5f5] py-6 px-8 w-full">
      {cart.length == 0 ? (
        <div className="text-center text-xl min-h-[30vh] flex justify-center  items-center font-bold text-gray-500">
          Your Cart is Empty
        </div>
      ) : (
        <>
          <div className="my-4 text-center">
            <button
              onClick={() => setOrderValue(1)}
              className="bg-blue-800 text-white px-4 py-2.5 text-lg cursor-pointer rounded-md "
            >
              CHECKOUT AT 9,000
            </button>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2  gap-6 ">
            {cart?.map((item, index) => (
              <CartCard setOrderValue={setOrderValue} key={index} id={index} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
