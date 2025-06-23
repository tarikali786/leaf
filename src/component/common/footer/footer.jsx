import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import ImageComponent from "../../image/ImageComponent";
import Logo from "../../../assets/whiteLogo.png";
export const Footer = () => {
  return (
    <div className="md:px-[8%] sm:px-[5%] px-2 py-2 text-center md:text-left bg-[var(--color-secondry)]  flex justify-center md:justify-center  gap-4 flex-wrap ">
      <div className="flex  flex-col items-center ">
        <ImageComponent
          src={Logo}
          alt="logo"
          cardCss="md:size-[200px] size-[160px] "
        />
        <div className="flex gap-4 my-4">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <XIcon />
        </div>
        <p className="text-gray-700 text-sm  ">
          2023 all Right Reserved Term of use Halo Leaf
        </p>
      </div>
     
    </div>
  );
};
