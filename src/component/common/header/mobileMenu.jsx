import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { HeaderData } from "../../../data";
import MenuIcon from "@mui/icons-material/Menu";
export const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="sm:hidden block">
      <MenuIcon onClick={handleClick} />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {HeaderData.map((item) => (
          <MenuItem key={item.id} onClick={handleClose}>
            <a href={item.link}> {item.title}</a>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
