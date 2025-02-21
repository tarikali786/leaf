import ImageComponent from "../../component/image/ImageComponent";
import Banner from "../../assets/banner.png";
import { Search } from "./search";

export const Hero = () => {
  return (
    <div className=" md:px-[10%] sm:px-[5%] px-2 py-4 ">
      <div className="  bg-[var(--color-primary)]  rounded-xl md:px-8 md:pt-8 sm:px-4 sm:pt-4 px-4 pt-6  flex md:flex-row  flex-col  gap-6  justify-between  ">
        <div className="md:w-[65%] ">
          <h1 className="md:text-5xl sm:text-2xl text-xl leading-[1.3] font-bold text-black  ">
            Sustainable Tableware for a Greener Tomorrow
          </h1>
          <div className="flex gap-6 mt-6">
            <div className="border-r-2 pr-6 border-gray-600">
              <h3 className="sm:text-2xl text-xl font-semibold text-black">
                50
              </h3>
              <p className="text-gray-800">Product</p>
            </div>
            <div>
              <h3 className="sm:text-2xl text-xl font-semibold text-black">
                100+
              </h3>
              <p className="text-gray-800">Customers</p>
            </div>
          </div>
          <Search />
        </div>
        <div className="md:relative md:w-[35%]">
          {/* <div className="md:absolute -left-40 bottom-28">
          <ImageComponent src={Vector} cardCss="w-[120px] " />
        </div> */}
          <div className="border  bg-black   w-full bottom-0 rounded-t-full pt-4 ">
            <ImageComponent
              src={Banner}
              cardCss=" md:pt-4 md:pl-8  sm:pl-5 pl-2 w-full md:h-[60vh]"

            />
          </div>
          {/* <div className="absolute  right-4 md:block hidden   top-10 ">
          <ImageComponent src={Vector2} cardCss="w-[60px]  " />
        </div> */}
        </div>
      </div>
    </div>
  );
};
