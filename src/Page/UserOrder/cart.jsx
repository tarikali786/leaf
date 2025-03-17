import React from "react";
import { Link } from "react-router-dom";
import { CartCard } from "./cart-card";

export const Cart = ({ setOrderValue }) => {
  return (
    <div className="bg-[#f5f5f5] py-6 px-8 w-full">
      <div className="my-4 text-center">
        <button
          onClick={() => setOrderValue(1)}
          className="bg-blue-800 text-white px-4 py-2.5 text-lg cursor-pointer rounded-md "
        >
          CHECKOUT AT 9,000
        </button>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2  gap-6 ">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <CartCard key={index} id={index} />
        ))}
      </div>
    </div>
  );
};
