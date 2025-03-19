import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import useMediaQuery from "@mui/material/useMediaQuery";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Img1 from "../../../src/assets/product 1/1.png";

import { CategoryData } from "../../data/staticData";
import ImageComponent from "../../component/image/ImageComponent";
export const Categories = () => {
  const isSm = useMediaQuery("(max-width:760px)"); // Mobile
  const isMd = useMediaQuery("(max-width:1060px)"); // Tablet
  return (
    <div className="bg-[var(--color-primary)]">
      <div className=" md:px-[10%] sm:px-[5%] px-2 py-8 md:mt-8 sm:mt-4 ">
        <div className="text-center">
          <h2 className="md:text-2xl  text-xl  font-semibold">Categories</h2>
          <p className="md:text-[16px] text-gray-600 mt-1">
            Find what you are looking for
          </p>
        </div>

        <div className=" mt-16">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={isSm ? 1 : isMd ? 2 : 3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className=""
          >
            {CategoryData?.map((item, index) => (
              <SwiperSlide key={index} className="">
                <ImageComponent
                  src={item?.img}
                  alt="imt"
                  cardCss="h-[60vh]  rounded-xl overflow-hidden bg-gray-300  "
                />
                <div className="text-center mt-4">
                  <h3 className="text-[15px] font-semibold">Category 1</h3>
                  <p className="text-gray-800 mt-0 text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, rerum?
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
