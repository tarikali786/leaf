import React from "react";
import { CartCard } from "./cart-card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Cart = () => {
  const { cart } = useSelector((state) => state.leaf);
  return (
    <div className="bg-[#f5f5f5] py-6 px-8 w-full">
      {cart.length == 0 ? (
        <div className="text-center text-xl min-h-[30vh] flex justify-center  items-center font-bold text-gray-500">
          Your Cart is Empty
        </div>
      ) : (
        <div className="">
          <div className="my-4 text-center">
            <Link
              to="/order"
              className="bg-blue-800 text-white px-4 py-2.5 text-lg cursor-pointer rounded-md "
            >
              CHECKOUT AT 9,000
            </Link>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2  gap-6 ">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <CartCard key={index} id={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
