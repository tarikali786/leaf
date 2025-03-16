import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { deleteAddress } from "../../feature/leafSlice";
import { Link } from "react-router-dom";
export const Address = () => {
  const { addresses } = useSelector((state) => state.leaf.user);
  const dispatch = useDispatch();
console.log(addresses);

  const handleDeleteAddress = (id) => {
    dispatch(deleteAddress(id));
  };
  return (
    <div className="bg-[#f5f5f5] py-6 px-8 w-full space-y-4">
      {addresses?.map((item, index) => (
        <div
          key={index}
          className=" bg-white shadow-2xl border p-4 rounded-xl text-lg flex justify-between"
        >
          <p className="w-[80%]">
            {item?.address1} , {item?.address2},{item?.pin_code},{" "}
            {item?.district}, {item?.city}, {item?.state}
          </p>
          <div className="flex gap-x-4 ">
            <Link to={`/address/${item?.documentId}`}>
              <EditIcon className=" cursor-pointer hover:shadow-2xl" />
            </Link>
            <DeleteForeverIcon
              className=" cursor-pointer"
              onClick={() => handleDeleteAddress(item?.documentId)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
