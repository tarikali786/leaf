import { useState } from "react";
import { Tabs, Tab, useMediaQuery } from "@mui/material";
import ImageComponent from "../../component/image/ImageComponent";
import { AccountSetting } from "./account-setting";
import "./style.css";
import { Cart } from "./cart";
import { Order } from "./order";
import { useSelector } from "react-redux";
import { Address } from "./address";
export const Profile = () => {
  const [value, setValue] = useState(0);
  const user = useSelector((state) => state.leaf.user);
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  const isMd = useMediaQuery("(max-width:768px)");

  return (
    <div className="md:px-[10%] sm:px-[5%] px-4  py-4 mt-2   ">
      <h2 className="text-2xl font-semibold">MY PROFILE</h2>
      <div className="flex md:flex-row flex-col items-center gap-2 my-6">
        <div className="md:w-[20%] w-full   flex flex-col gap-2 justify-center  items-center">
          <ImageComponent cardCss="size-24" variant="circular" />
          <h4 className="text-lg font-semibold my-1">{user?.name}</h4>
          <p className="text-gray-700">{user?.email}</p>
          <b className="font-semibold">{user?.phone}</b>
        </div>

        <div className="md:w-[80%] w-full md:flex-col flex rounded-xl bg-[#c1c1c1]">
          <Tabs
            value={value}
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
            <Tab label="Account Settings" />
            <Tab label="Cart" />
            <Tab label="Address" />

            <Tab label="My Orders" />
            {/* <Tab label="Subscribe for Updates" /> */}
          </Tabs>
          {value === 0 && <AccountSetting />}
          {value === 1 && <Cart />}
          {value === 2 && <Address />}
          {value === 3 && <Order />}
        </div>
      </div>
    </div>
  );
};
