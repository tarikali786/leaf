import React, { useEffect, useState } from "react";
import { Tabs, Tab, TextField, Button, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUserDetails } from "../../feature/leafSlice";
import { toast } from "react-toastify";
export const AccountSetting = () => {
  const [editMode, setEditMode] = useState(false);
  const user = useSelector((state) => state.leaf.user);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    alternatePhone: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (user) {
      setFormData({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        alternatePhone: user?.alternatePhone || "",
      });
    }
  }, [user]);
  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    dispatch(UpdateUserDetails({ id: user?.id, data: formData }))
      .unwrap()
      .then((res) => {
        toast.success("User details updated successfully!");
        setEditMode(false);
      })
      .catch((err) => {
        toast.error(err?.message || "Failed to update user details", {
          position: "top-right",
        });
      });
  };
  return (
    <div className="bg-[#f5f5f5] pt-6 flex items-center justify-center py-5  w-full">
      <div className="sm:w-[60%] w-full sm:p-0 px-6">
        <div className="flex items-center gap-4">
          <p className="text-gray-500 md:text-md hidden md:block ">
            NAME:
          </p>
          <TextField
            fullWidth
            disabled={!editMode}
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-[#e0e0e0] border-none"
          />
        </div>

        <div className="flex items-center gap-4 my-4">
          <p className="text-gray-500 md:block hidden ">
            EMAIL ADDRESS:
          </p>
          <TextField
            fullWidth
            disabled={!editMode}
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-[#e0e0e0] border-none"
          />
        </div>

        <div className="flex items-center gap-4">
          <p className="text-gray-500 md:block hidden ">
            PHONE NUMBER:
          </p>
          <TextField
            fullWidth
            disabled={!editMode}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-[#e0e0e0] border-none"
          />
        </div>
        <div className="flex items-center gap-4 my-4">
          <p className="text-gray-500 md:block hidden  ">
            ALTERNATE PHONE NUMBER:
          </p>
          <TextField
            fullWidth
            disabled={!editMode}
            name="alternatePhone"
            value={formData.alternatePhone}
            onChange={handleChange}
            className="bg-[#e0e0e0] border-none"
          />
        </div>

        <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
          <Button onClick={handleEdit} sx={{ color: "blue" }}>
            {editMode ? "Cancel" : "Edit"}
          </Button>
          {editMode && (
            <Button onClick={handleSave} sx={{ color: "blue" }}>
              Save
            </Button>
          )}
        </Box>
      </div>
    </div>
  );
};
