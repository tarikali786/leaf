import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Product1 from "../../assets/Frame 7.png";
import Product2 from "../../assets/Frame 8.png";
import Product3 from "../../assets/Frame 9.png";
import ImageComponent from "../../component/image/ImageComponent";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

const products = [
  { id: 1, img: Product1, name: "Product 1", price: "₹1,200.00" },
  { id: 2, img: Product2, name: "Product 2", price: "₹1,500.00" },
  { id: 3, img: Product3, name: "Product 3", price: "₹900.00" },
  { id: 4, img: Product1, name: "Product 4", price: "₹2,000.00" },
  { id: 5, img: Product1, name: "Product 5", price: "₹1,750.00" },
];

export const BestSell = () => {
  const [hideDetails, setHideDetails] = useState(false);
  const isMd = useMediaQuery("(min-width:768px)");

  return (
    <div className="md:px-[10%] md:h-[60vh] sm:px-[5%] px-2 py-4 md:mt-8 sm:mt-4 flex md:flex-row flex-col gap-6   justify-between">
      {/* Left Side Details with Animation */}
      <motion.div
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: hideDetails ? 0 : 1, x: hideDetails ? -100 : 0 }}
        transition={{ duration: 0.5 }}
        className={`transition-all  ${hideDetails ? "w-0" : "md:w-1/3"}`}
      >
        <h3 className="md:text-3xl sm:text-2xl text-xl font-semibold">
          Best Selling Products
        </h3>
        <p className="text-gray-500 mt-2">
          “Every product at Halo Leaf is designed with the environment in mind.
          Discover how our eco-friendly practices make a difference.
        </p>
        <Link
          to="/shop"
          className="bg-[var(--color-secondry)] w-max px-2 py-2 rounded-md flex items-center gap-1 mt-4"
        >
          See more <ArrowRightAltIcon />
        </Link>
      </motion.div>

      {/* Swiper Slider with 3 Cards at a Time */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={3}
        className={`max-h-[54vh]   ${
          hideDetails ? "w-full" : "md:w-2/3 w-full"
        }`}
        onSlideChange={(swiper) => {
          if (isMd) {
            setHideDetails(swiper.activeIndex !== 0);
          }
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ImageComponent
              src={product.img}
              alt={product.name}
              cardCss="md:h-[45vh]  rounded-md bg-[#B6B5B5]"
              imgCss="size-44 object-contain"
            />
            <p className="sm:text-[18px] mt-2">{product.name}</p>
            <span className="text-gray-500 text-sm">22</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
