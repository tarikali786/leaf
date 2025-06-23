import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import Testimonial1 from "../../assets/testimonial1.png";
import Quote from "../../assets/icons8-quote-40.png";
import StarSharpIcon from "@mui/icons-material/StarSharp";
import { Pagination } from "swiper/modules";
import ImageComponent from "../../component/image/ImageComponent";
export const Testimonials = () => {
  return (
    <div className="md:px-[10%] sm:px-[5%] px-2 py-4 md:mt-8 sm:mt-4 mb-20 ">
      <div>
        <h3 className="md:text-2xl text-xl md:text-left text-center font-semibold md:w-[26%]">
          What customers say about Halo Leaf?
        </h3>
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        slidesPerView={"auto"}
        spaceBetween={100}
        modules={[Pagination]}
        className="mt-10 cursor-grab"
      >
        {[1, 2, 3, 4, 5].map((item, index) => (
          <SwiperSlide
            key={index}
            className="bg-[var(--color-secondry)] opacity-90 rounded-xl md:p-10 sm:p-6 p-4 relative"
          >
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis itaque placeat atque beatae. Tempora temporibus
              dolorem ad aspernatur magni ipsum modi non obcaecati molestias
              fuga. Tempora nostrum rem incidunt alias.
            </p>
            <div className="flex justify-between items-center ">
              <div className="relative flex items-center gap-1">
                <ImageComponent
                  src={Testimonial1}
                  cardCss="md:w-[100px] w-[80px] mt-2 h-[20vh] "
                />
                <div className="absolute top-8 left-0">
                  <ImageComponent src={Quote} imgCss=" size-6" />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold ">John Doe</h3>
                  <p className="text-sm  text-gray-600 ">CEO </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <StarSharpIcon /> 4.5
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
