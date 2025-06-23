import ImageComponent from "../../component/image/ImageComponent";
import { Search } from "./search";
import Banner from "../../assets/product 1/5.png";

export const Hero = () => {
  return (
    <div className=" md:px-[10%] sm:px-[5%] px-2 py-4 ">
      <div className="  bg-[var(--color-primary)] opacity-90  rounded-xl md:px-8 md:pt-8 sm:px-4 sm:pt-4 px-4 pt-6  flex md:flex-row  flex-col  gap-6  justify-between  ">
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
        <div className="md:relative md:w-[35%] mb-8  rounded-full  ">
          <ImageComponent src={Banner} cardCss=" w-full h-full " />
        </div>
      </div>
    </div>
  );
};
