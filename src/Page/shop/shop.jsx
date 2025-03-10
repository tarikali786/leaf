import React from "react";
import { ShopCard } from "./shop-card";

export const Shop = () => {
  return (
    <div className="md:px-[10%] sm:px-[5%] px-2 py-4 mt-2   ">
      <h2 className="text-2xl font-semibold">Shop</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2  gap-6 mt-6">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <ShopCard key={index} id={index} />
        ))}
      </div>
    </div>
  );
};
