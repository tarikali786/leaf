import ImageComponent from "../../component/image/ImageComponent";
import Icon1 from "../../assets/Vector (5).png";
import Icon2 from "../../assets/Vector (6).png";
import Icon3 from "../../assets/Vector (7).png";
export const About = () => {
  return (
    <div className=" md:px-[10%] sm:px-[5%] px-2 py-4 md:mt-8 sm:mt-4 ">
      <div className="text-center">
        <h2 className="md:text-2xl  text-xl  font-semibold">About Us</h2>
        <p className="md:text-[16px] text-gray-600 mt-1">
          Order now and appreciate the beauty of nature
        </p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2  gap-8 mt-4">
        <div className="flex flex-col items-center gap-2 text-center">
          <ImageComponent
            variant="circular"
            cardCss="size-20 bg-[var(--color-primary)] rounded-full p-2 "
            src={Icon1}
            imgCss="size-8"
          />
          <h3 className="sm:text-xl text-lg font-semibold">Large Assortment</h3>
          <p className="text-gray-700 md:w-[70% ] md:text-[16px] text-sm">
            we offer many different types of products with fewer variations in
            each category.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <ImageComponent
            variant="circular"
            cardCss="size-20 bg-[var(--color-primary)] rounded-full p-2"
            src={Icon2}
            imgCss="size-8"
          />
          <h3 className="sm:text-xl text-lg font-semibold">
            Fast & Free Shipping
          </h3>
          <p className="text-gray-700 md:w-[70%] md:text-[16px] text-sm">
            4-day or less delivery time, free shipping and an expedited delivery
            option.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <ImageComponent
            variant="circular"
            cardCss="size-20 bg-[var(--color-primary)] rounded-full p-2 "
            src={Icon3}
            imgCss="size-8"
          />
          <h3 className="sm:text-xl text-lg font-semibold">24/7 Support</h3>
          <p className="text-gray-700 md:w-[70%] md:text-[16px] text-sm">
            answers to any business related inquiry 24/7 and in real-time.
          </p>
        </div>
      </div>
    </div>
  );
};
