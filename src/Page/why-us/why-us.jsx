import { useEffect, useRef } from "react";
import { create } from "@lottiefiles/lottie-interactivity";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaSeedling,
  FaGlobe,
  FaHandsHelping,
  FaMedkit,
  FaBiohazard,
} from "react-icons/fa";
import lottie from "lottie-web";
import LineAnimation from "../../assets/Lotie/Leaf.json";

export const WhyUs = () => {
  const lottieContainer = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const tileVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        controls.start("visible");
      }, 1000); // Delay 2 seconds after inView
      return () => clearTimeout(timer);
    }
  }, [inView, controls]);

  useEffect(() => {
    if (lottieContainer.current) {
      const lottieInstance = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: LineAnimation,
      });

      create({
        mode: "scroll",
        player: lottieInstance,
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [0, 180],
          },
        ],
      });

      lottieInstance.addEventListener("complete", () => {
        lottieInstance.pause();
      });

      return () => {
        lottieInstance.destroy();
      };
    }
  }, []);

  return (
    <div className="w-full overflow-hidden" ref={ref}>
      <h2 className="text-3xl font-bold text-center my-12">ABOUT US</h2>

      <div className="flex justify-center my-6">
        <p className="text-lg leading-relaxed max-w-3xl text-center">
          Halo Leaf is dedicated to providing eco-friendly, sustainable, and
          biodegradable dining solutions through our high-quality Siali leaf
          plates...
        </p>
      </div>

      <div className="relative discover-left-card mb-[30vh]">
        <div className="lottieContainer-caard" ref={lottieContainer}></div>

        {/* Cards */}
        <motion.div
          variants={tileVariants}
          initial="hidden"
          animate={controls}
          whileHover="hover"
          className="absolute top-68 left-28 flex flex-col items-center p-6 rounded-lg shadow-lg bg-white"
        >
          <FaMedkit className="text-green-500 text-5xl" />
          <h4 className="mt-4 text-xl font-semibold">Chemical-Free</h4>
          <p className="mt-2 text-gray-600 text-sm">
            Non-toxic for a healthier meal.
          </p>
        </motion.div>

        <motion.div
          variants={tileVariants}
          initial="hidden"
          animate={controls}
          whileHover="hover"
          className="absolute bottom-30 left-8 flex flex-col items-center p-6 rounded-lg shadow-lg bg-white"
        >
          <FaHandsHelping className="text-green-500 text-5xl" />
          <h4 className="mt-4 text-xl font-semibold">Community Support</h4>
          <p className="mt-2 text-gray-600 text-sm">
            Empowering tribal artisans and rural communities.
          </p>
        </motion.div>

        <motion.div
          variants={tileVariants}
          initial="hidden"
          animate={controls}
          whileHover="hover"
          className="absolute -bottom-26 left-50 flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
        >
          <FaSeedling className="text-green-500 text-5xl" />
          <h4 className="mt-4 text-xl font-semibold">
            Natural & Biodegradable
          </h4>
          <p className="mt-2 text-gray-600 text-sm">
            100% natural and fully biodegradable.
          </p>
        </motion.div>

        <motion.div
          variants={tileVariants}
          initial="hidden"
          animate={controls}
          whileHover="hover"
          className="absolute top-40 right-6 flex flex-col items-center p-6 rounded-lg shadow-lg bg-white"
        >
          <FaGlobe className="text-green-500 text-5xl" />
          <h4 className="mt-4 text-xl font-semibold">Eco-Friendly</h4>
          <p className="mt-2 text-gray-600 text-sm">
            Renewable and sustainable for a greener future.
          </p>
        </motion.div>

        <motion.div
          variants={tileVariants}
          initial="hidden"
          animate={controls}
          whileHover="hover"
          className="absolute bottom-50 right-6 flex flex-col items-center p-6 rounded-lg shadow-lg bg-white"
        >
          <FaHandsHelping className="text-green-500 text-5xl" />
          <h4 className="mt-4 text-xl font-semibold">Rural Livelihoods</h4>
          <p className="mt-2 text-gray-600 text-sm">
            Supporting communities and tribal artisans.
          </p>
        </motion.div>

        <motion.div
          variants={tileVariants}
          initial="hidden"
          animate={controls}
          whileHover="hover"
          className="absolute -bottom-26 right-60 p-6 flex flex-col items-center rounded-lg shadow-lg bg-white"
        >
          <FaBiohazard className="text-green-500 text-5xl" />
          <h4 className="mt-4 text-xl font-semibold">Antibacterial</h4>
          <p className="mt-2 text-gray-600 text-sm">
            Naturally prevents bacteria growth.
          </p>
        </motion.div>
      </div>

      <p className="text-lg leading-relaxed mt-8 text-center max-w-3xl m-auto py-10">
        At Halo Leaf, we believe in sustainability with impact...
      </p>
    </div>
  );
};
