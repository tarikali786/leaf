import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import ImageComponent from "../../image/ImageComponent";
import Logo from "../../../assets/whiteLogo.png";
export const Footer = () => {
  return (
    <div className="md:px-[8%] sm:px-[5%] px-2 py-6 text-center md:text-left bg-[var(--color-secondry)]  flex justify-center md:justify-between  gap-4 flex-wrap pt-10">
      <div className="flex  flex-col items-center ">
        <ImageComponent
          src={Logo}
          alt="logo"
          cardCss="md:size-[140px] size-[100px] "
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
      <div className="flex gap-16 flex-wrap  justify-center">
        <div>
          <h3 className="text-[16px]  font-semibold mb-2">Information</h3>
          <p className="text-sm text-gray-800">About</p>
          <p className="text-sm text-gray-800  my-2">Product</p>
          <p className="text-sm text-gray-800">Blog</p>
        </div>
        <div>
          <h3 className="text-[16px]  font-semibold  mb-2">Company</h3>
          <p className="text-sm text-gray-800">Community</p>
          <p className="text-sm text-gray-800 my-2">Career</p>
          <p className="text-sm text-gray-800">Our Story</p>
        </div>
        <div>
          <h3 className="text-[16px]  font-semibold  mb-2">Contact</h3>
          <p className="text-sm text-gray-800">Getting Started</p>
          <p className="text-sm text-gray-800  my-2">Pricing</p>
          <p className="text-sm text-gray-800">Resoucres</p>
        </div>
      </div>
    </div>
  );
};
