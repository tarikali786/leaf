import Img1 from "../../assets/contactus.png";
import { FAQ } from "../../component";
export const ContactUs = () => {
  return (
    <div className="md:px-[10%] sm:px-[5%] px-2 py-4 mt-2   ">
      <h2 className="md:text-2xl text-xl font-semibold">CONTACT US</h2>
      <div className="rounded-xl overflow-hidden mt-4 relative md:h-[60vh] h-[40vh] gap-5">
        <img src={Img1} alt="" className="-z-10 object-cover h-full w-full" />
        <div className=" absolute top-20  flex justify-around w-full  ">
          <p className="w-40 text-white md:text-lg ">
            THERE WILL BE 4 PHOTOS WHICH WILL BE CHANGED AFTER EVERY 3 SECONDS
          </p>
          <p className="w-30 text-white md:text-lg ">
            A DIFFERENT TRANSITION WILL BE USED HERE
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 sm:text-left text-center text- mt-5 md:gap-2 gap-6">
        <div>
          <h3 className="md:text-lg font-semibold  text-gray-800 ">
            Phone Number
          </h3>
          <p className="mt-1 ">+91-9876543212</p>
        </div>
        <div>
          <h3 className="md:text-lg font-semibold  text-gray-800 ">
            EMAIL ADDRESS
          </h3>
          <p className="mt-1 ">electmyscooter@gmail.com</p>
        </div>
        <div>
          <h3 className="md:text-lg font-semibold  text-gray-800 ">
            OFFICE ADDRESS
          </h3>
          <p className="mt-1 ">LINE 1 LINE 2 LINE 3</p>
        </div>
        <div>
          <h3 className="md:text-lg font-semibold  text-gray-800 ">
            GST NUMBER || IMPORTANT NUMBER
          </h3>
          <p className="mt-1 ">NUMBER 1</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="md:text-2xl  text-xl  font-semibold mb-4">FAQ</h2>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <FAQ key={index} />
        ))}
      </div>
    </div>
  );
};
