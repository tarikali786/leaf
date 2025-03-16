import React, { useState } from "react";
import { Tabs, Tab, TextField, Button, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
export const AccountSetting = () => {
  const [editMode, setEditMode] = useState(false);
  const user = useSelector((state) => state.leaf.user);

  const [formData, setFormData] = useState({
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
    altPhone: "+91-9234567890",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleEdit = () => {
    setEditMode(!editMode);
  };
  return (
    <div className="bg-[#f5f5f5] pt-6 flex items-center justify-center py-5  w-full">
      <div className="sm:w-[60%] w-full sm:p-0 px-6">
        <div className="flex items-center gap-4">
          <Typography variant="body1" className="text-gray-500 ">
            NAME:
          </Typography>
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
          <Typography variant="body1" className="text-gray-500 ">
            EMAIL ADDRESS:
          </Typography>
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
          <Typography variant="body1" className="text-gray-500 ">
            PHONE NUMBER:
          </Typography>
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
          <Typography variant="body1" className="text-gray-500 ">
            ALTERNATE PHONE NUMBER:
          </Typography>
          <TextField
            fullWidth
            disabled={!editMode}
            name="altPhone"
            value={formData.altPhone}
            onChange={handleChange}
            className="bg-[#e0e0e0] border-none"
          />
        </div>
       

        <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
          <Button onClick={handleEdit} sx={{ color: "blue" }}>
            {editMode ? "Cancel" : "Edit"}
          </Button>
          {editMode && (
            <Button sx={{ color: "blue" }} onClick={() => setEditMode(false)}>
              Save
            </Button>
          )}
        </Box>
      </div>
    </div>
  );
};
