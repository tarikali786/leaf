import React from "react";
import Whyus from "../../assets/Group 49.png";
import Beleive from "../../assets/Group 50.png";
import ImageComponent from "../../component/image/ImageComponent";

export const WhyUs = () => {
  return (
    <div className="md:px-[10%] sm:px-[5%] px-2 py-4 mt-2   ">
      <h2 className="text-2xl font-semibold">ABOUT US</h2>

      <div className="flex sm:flex-row gap-4 flex-col mt-16 ">
        <div className="w-[70%] space-y-5">
          <div className="flex gap-4">
            <ImageComponent
              src={Whyus}
              cardCss="sm:size-36 size:26"
              imgCss=""
            />
            <p className="w-[70%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              modi labore! Incidunt labore laborum eius. Dignissimos hic
              perspiciatis dicta tenetur error! Ut quo at similique, commodi
              nesciunt incidunt cumque voluptatum ipsam vel autem, dolores porro
              voluptates sed tempore quae maxime quod debitis reprehenderit in
              ea explicabo. Tempora dolores molestiae unde illum excepturi, illo
              vero sit harum nemo pariatur deserunt rerum?
            </p>
          </div>
          <div className="flex gap-4 flex-row-reverse">
            <ImageComponent
              src={Beleive}
              cardCss="sm:size-36 size:26"
              imgCss=""
            />
            <p className="w-[70%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              modi labore! Incidunt labore laborum eius. Dignissimos hic
              perspiciatis dicta tenetur error! Ut quo at similique, commodi
              nesciunt incidunt cumque voluptatum ipsam vel autem, dolores porro
              voluptates sed tempore quae maxime quod debitis reprehenderit in
              ea explicabo. Tempora dolores molestiae unde illum excepturi, illo
              vero sit harum nemo pariatur deserunt rerum?
            </p>
          </div>
        </div>
        <div className="w-[30%] h-[50vh]">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUtDF7VgU4terjjq8xZW_pyOYIJ7Dw5fOm9w&s"
            }
            alt=""
            className="w-full h-full object-fill"
          />
        </div>
      </div>
    </div>
  );
};
