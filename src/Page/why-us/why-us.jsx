import React from "react";
import Whyus from "../../assets/Group 49.png";
import Beleive from "../../assets/Group 50.png";
import Img4 from "../../assets/product 1/4.png";

import ImageComponent from "../../component/image/ImageComponent";

export const WhyUs = () => {
  return (
    <div className="md:px-[10%] sm:px-[5%] px-2 py-4 mt-2   ">
      <h2 className="text-2xl font-semibold">ABOUT US</h2>

      <div className="flex sm:flex-row gap-4 flex-col mt-16 ">
        <div className="w-[60%] space-y-5">
          <p className="text-lg">
            Halo Leaf is dedicated to providing eco-friendly, sustainable, and
            biodegradable dining solutions through our high-quality Siali leaf
            plates. Our products honor traditional craftsmanship while promoting
            a greener planet. Every plate is made with care, ensuring a natural,
            safe, and sustainable dining experience.
          </p>

          <p className="text-lg">
            Our mission at Halo Leaf is to reduce plastic waste and promote
            sustainable dining by offering 100% natural Siali leaf plates. We
            aim to:
            <ul className="px-4 list-disc mt-6 text-gray-700">
              <li>
                Encourage eco-conscious living by providing biodegradable and
                chemical-free tableware.
              </li>
              <li>
                Support rural communities by empowering tribal artisans who
                handcraft these plates.
              </li>
              <li>
                Preserve nature by promoting zero-waste solutions that leave no
                environmental footprint.
              </li>
            </ul>
          </p>

          <div>
            <h3 className="text-xl  font-semibold">
              Why Choose Halo Leaf’s Siali Leaf Plates?
            </h3>

            <p className="text-lg">
              Benefits of Siali Leaf
              <ul className="px-4 list-disc mt-6 text-gray-700">
                <li>100% Natural & Biodegradable</li>
                <li>SuEco-Friendly & Renewable</li>
                <li>Supports Rural Livelihoods</li>
              </ul>
            </p>

            <div className="text-lg my-6 text-semibold">
              <h3 className=" text-lg  font-semibold">
                {" "}
                Health Benefits of Eating on Siali Leaf Plates
              </h3>
              <ul className="px-4 list-disc mt-6 text-gray-700">
                <li>Chemical-Free & Non-Toxic</li>
                <li>Naturally Antibacterial</li>
                <li>Enhances Taste & Aroma</li>
              </ul>
            </div>
          </div>
          <p className="">
            At Halo Leaf, we believe in sustainability with impact. Every meal
            served on our plates is a step toward a cleaner planet and a
            healthier lifestyle. Join us in embracing nature’s best dining
            solution!
          </p>
        </div>
        <div className="w-[40%] h-full">
          <img src={Img4} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};
