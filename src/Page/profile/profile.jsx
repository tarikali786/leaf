import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import ImageComponent from "../../component/image/ImageComponent";
import { AccountSetting } from "./account-setting";
import "./style.css";
import { Cart } from "./cart";
import { Order } from "./order";
import { Payment } from "./payment";
export const Profile = () => {
  const [value, setValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="md:px-[10%] sm:px-[5%] px-2 py-4 mt-2   ">
      <h2 className="text-2xl font-semibold">MY PROFILE</h2>
      <div className="flex sm:flex-row flex-col gap-2 my-6">
        <div className="sm:w-[20%] w-full   flex flex-col gap-2 justify-center  items-center">
          <ImageComponent cardCss="size-24" variant="circular" />
          <h4 className="text-lg font-semibold my-1">Mohit Gopal</h4>
          <p className="text-gray-700">mohit.gopal18@gmail.com</p>
          <b className="font-semibold">+91-9234567890</b>
        </div>

        <div className="sm:w-[80%] w-full rounded-xl bg-[#c1c1c1]">
          <Tabs
            value={value}
            onChange={handleTabChange}
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              padding: ".2rem .5rem 0",
            }}
          >
            <Tab label="Account Settings" />
            <Tab label="Cart" />

            <Tab label="My Orders" />
            <Tab label="Subscribe for Updates" />
          </Tabs>
          {value === 0 && <AccountSetting />}
          {value === 1 && <Cart />}
          {value === 2 && <Order />}
          {value === 3 && <Payment />}
        </div>
      </div>
    </div>
  );
};
