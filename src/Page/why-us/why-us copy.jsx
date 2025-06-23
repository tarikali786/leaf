import { useEffect, useRef, useState } from "react";
import { create } from "@lottiefiles/lottie-interactivity";
import { motion } from "framer-motion";
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
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [visibleCards, setVisibleCards] = useState(0);

  const cardsData = [
    {
      icon: <FaMedkit className="text-green-500 text-5xl" />,
      title: "Chemical-Free",
      desc: "Non-toxic for a healthier meal.",
      className: "absolute top-10 left-54",
    },
    {
      icon: <FaHandsHelping className="text-green-500 text-5xl" />,
      title: "Community Support",
      desc: "Empowering tribal artisans and rural communities.",
      className: "absolute top-60 left-20 z-0",
    },
    {
      icon: <FaSeedling className="text-green-500 text-5xl" />,
      title: "Natural & Biodegradable",
      desc: "100% natural and fully biodegradable.",
      className: "absolute bottom-20 left-40",
    },
    {
      icon: <FaGlobe className="text-green-500 text-5xl" />,
      title: "Eco-Friendly",
      desc: "Renewable and sustainable for a greener future.",
      className: "absolute top-10 right-26",
    },
    {
      icon: <FaHandsHelping className="text-green-500 text-5xl" />,
      title: "Rural Livelihoods",
      desc: "Supporting communities and tribal artisans.",
      className: "absolute top-60 right-26",
    },
    {
      icon: <FaBiohazard className="text-green-500 text-5xl" />,
      title: "Antibacterial",
      desc: "Naturally prevents bacteria growth.",
      className: "absolute bottom-10 right-50",
    },
  ];

  useEffect(() => {
    if (inView) {
      // Load lottie
      const lottieInstance = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: LineAnimation,
      });

      // Create interactivity
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

      // Start card animation after 2s
      const timer = setTimeout(() => {
        cardsData.forEach((_, index) => {
          setTimeout(() => {
            setVisibleCards((prev) => prev + 1);
          }, index * 300); // 300ms delay between cards
        });
      }, 2000);

      return () => {
        lottieInstance.destroy();
        clearTimeout(timer);
      };
    }
  }, [inView]);

  return (
    <div className="w-full overflow-hidden z-10" ref={ref}>
      <h2 className="text-3xl font-bold text-center my-12">ABOUT US</h2>

      <div className="flex justify-center my-6">
        <p className="text-lg leading-relaxed max-w-3xl text-center">
          Halo Leaf is dedicated to providing eco-friendly, sustainable, and
          biodegradable dining solutions through our high-quality Siali leaf
          plates...
        </p>
      </div>

      <div className="relative discover-left-card mb-[30vh]  ">
        <div className="lottieContainer-caard h-[90vh]" ref={lottieContainer}></div>

        {cardsData.slice(0, visibleCards).map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className={`${card.className} flex flex-col items-center p-4 rounded-lg shadow-lg bg-white`}
          >
            {card.icon}
            <h4 className="mt-4 text-sm font-semibold">{card.title}</h4>
            <p className="mt-2 text-gray-600 text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-lg leading-relaxed mt-8 text-center max-w-3xl m-auto py-10">
        Our mission at Halo Leaf is to reduce plastic waste and promote
        sustainable dining by offering 100% natural Siali leaf plates.
      </p>
    </div>
  );
};
