import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo2.png";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SortIcon from "@mui/icons-material/Sort";
import { HeaderData } from "../../../data";
import ImageComponent from "../../image/ImageComponent";
import { MobileMenu } from "./mobileMenu";

export const Header = () => {
  return (
    <div className="md:px-[8%] sm:px-[5%] px-2  flex justify-between gap-4  items-center ">
      <ImageComponent
        variant="circular"
        src={Logo}
        alt="logo"
        cardCss="sm:size-[90px] md:size-[90px] size-[60px]"
      />
      <div className="sm:flex items-center md:gap-10 sm:gap-4  gap-2 hidden ">
        {HeaderData.map((item) => (
          <Link
            to={item?.link}
            key={item?.id}
            className=" md:text-[16px] whitespace-nowrap text-sm text-gray-700"
          >
            {item?.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center md:gap-6 sm:gap-4 gap-4">
        <ShoppingCartOutlinedIcon />

        <Link to="/signup">
          <PersonOutlineIcon />
        </Link>

        <SortIcon className=" rotate-y-180 " />
        <MobileMenu />
      </div>
    </div>
  );
};
