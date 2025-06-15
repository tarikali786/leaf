import React from "react";
import { ShopCard } from "./shop-card";
import { useSelector } from "react-redux";

export const Shop = () => {
  const { product } = useSelector((state) => state.leaf);

  return (
    <div className="md:px-[10%] sm:px-[5%] px-2 py-4 mt-2   ">
      <h2 className="text-2xl font-semibold">Shop</h2>
      {product.length == 0 ? (
        <div className="flex justify-center items-center h-[50vh]">
          <h1 className="text-2xl">No items in the Product</h1>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2  gap-6 mt-6">
          {product?.map((item, index) => (
            <ShopCard key={index} id={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
