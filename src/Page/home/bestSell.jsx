import { Link } from "react-router-dom";
import Product1 from "../../assets/Frame 7.png";
import Product2 from "../../assets/Frame 8.png";
import Product3 from "../../assets/Frame 9.png";
import ImageComponent from "../../component/image/ImageComponent";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
export const BestSell = () => {
  return (
    <div className=" md:px-[10%] sm:px-[5%] px-2 py-4  md:mt-8 sm:mt-4 grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2  gap-6 ">
      <div>
        <h3 className="md:text-3xl sm:text-2xl text-xl  font-semibold">
          Best Selling Products
        </h3>
        <p className="text-gray-500 mt-2 ">
          “Every product at Halo Leaf is designed with the environment in mind.
          Discover how our eco-friendly practices make a difference
        </p>
        <Link
          to="/shop"
          className="bg-[var(--color-secondry)] w-max px-2 py-2 rounded-md flex items-center gap-1 mt-4"
        >
          See more <ArrowRightAltIcon />{" "}
        </Link>
      </div>
      <div>
        <ImageComponent
          src={Product1}
          alt="Product1"
          cardCss=" h-[45vh]   rounded-md bg-[#B6B5B5] "
          imgCss="size-44 object-contain"
        />
        <p className="sm:text-[18px] mt-2">Lorem, ipsum.</p>
        <span className="text-gray-500 text-sm">1,200.00</span>
      </div>
      <div>
        <ImageComponent
          src={Product2}
          alt="Product2"
          imgCss="size-44 object-contain"
          cardCss=" h-[45vh]   rounded-md bg-[#B6B5B5] "
        />
        <p className="sm:text-[18px] mt-2">Lorem, ipsum.</p>
        <span className="text-gray-500 text-sm">1,200.00</span>
      </div>{" "}
      <div>
        <ImageComponent
          src={Product3}
          alt="Product3"
          imgCss="size-44 object-contain"
          cardCss=" h-[45vh]   rounded-md bg-[#B6B5B5] "
        />
        <p className="sm:text-[18px] mt-2">Lorem, ipsum.</p>
        <span className="text-gray-500 text-sm">1,200.00</span>
      </div>
    </div>
  );
};
