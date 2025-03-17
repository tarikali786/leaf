import React from "react";
import { useState } from "react";
import { Tabs, Tab, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import ImageComponent from "../../component/image/ImageComponent";
import { Cart } from "./cart";
import { Address } from "./address";
import { Payment } from "./payment/payment";
// import ImageComponent from "../../component/image/ImageComponent";
// import { AccountSetting } from "./account-setting";
// import "./style.css";
// import { Cart } from "./cart";
// import { Order } from "./order";
// import { Payment } from "./payment";
// import { useSelector } from "react-redux";
// import { Address } from "./address";

export const UserOrder = () => {
  const [orderValue, setOrderValue] = useState(0);
  const user = useSelector((state) => state.leaf.user);
  const handleTabChange = (event, newValue) => {
    setOrderValue(newValue);
  };
  const isMd = useMediaQuery("(max-width:768px)");
  return (
    <div className="md:px-[10%] sm:px-[5%] px-4  py-4 mt-2  m-auto ">
      <h2 className="text-2xl font-semibold">Order </h2>
      <div className="flex items-center gap-2 my-6">
        <div className="md:w-[80%] w-full md:flex-col flex rounded-xl bg-[#c1c1c1]">
          <Tabs
            value={orderValue}
            onChange={handleTabChange}
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              padding: ".2rem .5rem 0",
            }}
            variant="scrollable"
            scrollButtons="auto"
            orientation={isMd ? "vertical" : "horizontal"}
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Cart" />
            <Tab label="Address" />
            <Tab label="Payment" />
            {/* <Tab label="Subscribe for Updates" /> */}
          </Tabs>

          {orderValue === 0 && <Cart setOrderValue={setOrderValue} />}
          {orderValue === 1 && <Address  setOrderValue={setOrderValue}  />}
          {orderValue === 2 && <Payment />}
        </div>
      </div>
    </div>
  );
};
