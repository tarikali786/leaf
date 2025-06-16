import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./style.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { CategoryData } from "../../data/staticData";
import ImageComponent from "../../component/image/ImageComponent";
import { useSelector } from "react-redux";
export const Categories = () => {
  const isSm = useMediaQuery("(max-width:760px)"); // Mobile
  const isMd = useMediaQuery("(max-width:1060px)"); // Tablet
  const { category } = useSelector((state) => state.leaf);
  console.log(category);

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
            {category?.map((item, index) => (
              <SwiperSlide key={index} className="">
                {item?.img ? (
                  <ImageComponent
                    src={item?.img}
                    alt="imt"
                    cardCss="h-[60vh]  rounded-xl overflow-hidden category-card "
                  />
                ) : (
                  <ImageComponent
                    src="http://13.127.210.28:1337/uploads/thumbnail_6_3941d44fee.png"
                    alt="imt"
                    cardCss="h-[60vh]  rounded-xl overflow-hidden category-card "
                    imgCss="object-fill w-[80%] h-[80%] p-4"
                  />
                )}
                <div className="text-center mt-4">
                  <h3 className="text-[15px] font-semibold">{item?.Name}</h3>
                  {/* <p className="text-gray-800 mt-0 text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, rerum?
                  </p> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
