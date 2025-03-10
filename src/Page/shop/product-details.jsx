import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, FreeMode, Navigation } from "swiper/modules";
import StarsIcon from "@mui/icons-material/Stars";
import ImageComponent from "../../component/image/ImageComponent";
import { useMediaQuery } from "@mui/material";
import { ShopCard } from "./shop-card";
import { useParams } from "react-router-dom";
export const ProductDetails = () => {
  const { id } = useParams();
  const isLg = useMediaQuery("(min-width:968px)"); // Large screens (lg)
  const isMd = useMediaQuery("(min-width:568px) and (max-width:1023px)"); // Medium screens (md)
  const isSm = useMediaQuery("(max-width:445px)");
  const featuresData = [
    { feature: "Feature 1", description: "Description 1" },
    { feature: "Feature 2", description: "Description 2" },
    { feature: "Feature 3", description: "Description 3" },
    { feature: "Feature 4", description: "Description 4" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="md:px-[10%] sm:px-[5%] px-2 py-4 mt-2 ">
      <h2 className="md:text-2xl text-xl font-semibold">Product</h2>

      <div className="flex mt-6 gap-6 md:flex-row flex-col">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="md:w-[45%] w-full text-center  "
        >
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <SwiperSlide key={index} className="">
              <ImageComponent cardCss="md:w-[80%] w-[80%] h-[36vh] md:h-[50vh] m-auto" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="md:w-[55%] w-full ">
          <h2 className="md:text-3xl text-xl font-semibold">GS-4321</h2>
          <p className="mt-3 text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            consequatur modi beatae, a corrupti dicta? Modi reprehenderit magni
            rerum aliquam.
          </p>
          <div className="mt-4">
            <h5 className=" uppercase  text-sm  font-semibold mb-2 ">
              Avg Customer Rating
            </h5>
            <div className="flex gap-1">
              {Array.from({ length: Math.round(4.5) }, (_, index) => (
                <StarsIcon key={index} style={{ fill: "#ffae00" }} />
              ))}
              <span className="text-gray-500">( 230 reviews )</span>
            </div>
            <h2 className="md:text-3xl text-xl  font-semibold mt-6 ">
              Rs. 3,000/-
            </h2>
            <div className="flex gap-4  mt-6">
              <button className="bg-blue-800 md:text-md text-sm uppercase text-white px-4 py-2 rounded-md cursor-pointer">
                Add To Cart
              </button>
              <button className="bg-green-600 md:text-md uppercase text-sm text-white px-4 py-2 rounded-md cursor-pointer">
                Add To Wish
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mt-10 mt-6">
        <h2 className="md:text-2xl text-xl font-semibold">
          Product Information{" "}
        </h2>
        <div>
          <p className="text-gray-800 mt-3 md:text-lg text-sm">
            Avg Customer Rating As our friends and families hover in the kitchen
            lets remember they are hungering for more than physical food. I
            believe the light in a home shines brightest in the kitchen, Let
            Your Light Shine! - Mary Jo Montanye, Grandmas Simple Cookbook
            Presenting our new pair of serving trays with a unique color
            palette, that looks pretty in💮 All online payment methods are
            accepted. ✅
          </p>
          <table className="md:w-[60%] w-full mt-6 border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2 md:text-lg text-sm font-semibold text-left">
                  FEATURES
                </th>
                <th className="border px-4 py-2 md:text-lg text-sm font-semibold text-left">
                  DESCRIPTION
                </th>
              </tr>
            </thead>
            <tbody>
              {featuresData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border px-4 md:text-lg text-sm py-2">
                    {item.feature}
                  </td>
                  <td className="border px-4 md:text-lg text-sm py-2">
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="md:text-2xl text-xl font-semibold flex items-center gap-2">
          Reviews{" "}
          <b className="text-primary">
            4.0 <StarsIcon />
          </b>{" "}
        </h2>
        <div className="my-6">
          <Swiper
            slidesPerView={isLg ? 3 : isMd ? 2 : isSm && 1}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className=" cursor-grab  "
          >
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <SwiperSlide key={index} className=" p-2 shadow-2xl">
                <ImageComponent cardCss=" h-[30vh]" />
                <div className="flex gap-2 items-center mt-5">
                  <ImageComponent cardCss="  size-16" variant="circular" />
                  <div>
                    <h4 className="text-[16px] font-semibold">Profile Name</h4>
                    <p className="text-sm  text-gray-800">Customer</p>
                  </div>
                </div>
                <p className="md:text-lg text-sm text-gray-600 mt-3">
                  I’ve been using this electric scooter for the past 2 years and
                  it is very helpful. I take it wout when I have to go out for a
                  market. It helps me connect to the nature. ALong with this a
                  helmet would be great.{" "}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="py-4">
        <h2 className="md:text-2xl text-xl font-semibold uppercase">
          SIMILAR Product
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2  gap-6 mt-4">
          {[1, 2, 3].map((item, index) => (
            <ShopCard key={index} id={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
