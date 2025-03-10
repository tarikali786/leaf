import React, { useState } from "react";
import { Tabs, Tab, TextField, Button, Box, Typography } from "@mui/material";
export const AccountSetting = () => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "MOHIT GOPAL",
    email: "mohit.gopal18@gmail.com",
    phone: "+91-9182736454",
    altPhone: "+91-9234567890",
    address: "LINE 1\nLINE 2\nLINE 3",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleEdit = () => {
    setEditMode(!editMode);
  };
  return (
    <div className="bg-[#f5f5f5] pt-6 flex items-center justify-center py-5 w-full">
      <div className="w-[60%]">
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
        <div className="flex items-center gap-4 ">
          <Typography variant="body1" className="text-gray-500 ">
            ADDRESS:
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={3}
            disabled={!editMode}
            name="address"
            value={formData.address}
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
