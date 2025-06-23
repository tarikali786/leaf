import React, { useEffect, useState, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../assets/Lotie/Leaf.json";
import {
  FaSeedling,
  FaGlobe,
  FaHandsHelping,
  FaMedkit,
  FaBiohazard,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const WhyUs = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const lottieRef = useRef(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [visibleCards, setVisibleCards] = useState(0);

  const cardsData = [
    {
      icon: <FaMedkit className="text-green-500 text-5xl" />,
      title: "Chemical-Free",
      desc: "Non-toxic for a healthier meal.",
      className: "lg:absolute top-5 left-64 ",
    },
    {
      icon: <FaHandsHelping className="text-green-500 text-5xl" />,
      title: "Community Support",
      desc: "Empowering tribal artisans and rural communities.",
      className: "lg:absolute top-60 left-20 z-0",
    },
    {
      icon: <FaSeedling className="text-green-500 text-5xl" />,
      title: "Natural & Biodegradable",
      desc: "100% natural and fully biodegradable.",
      className: "lg:absolute bottom-30 left-40",
    },
    {
      icon: <FaGlobe className="text-green-500 text-5xl" />,
      title: "Eco-Friendly",
      desc: "Renewable and sustainable for a greener future.",
      className: "lg:absolute top-5 right-26",
    },
    {
      icon: <FaHandsHelping className="text-green-500 text-5xl" />,
      title: "Rural Livelihoods",
      desc: "Supporting communities and tribal artisans.",
      className: "lg:absolute top-60 right-26",
    },
    {
      icon: <FaBiohazard className="text-green-500 text-5xl" />,
      title: "Antibacterial",
      desc: "Naturally prevents bacteria growth.",
      className: "lg:absolute bottom-30 right-50",
    },
  ];

  useEffect(() => {
    if (inView) {
      // Start card animation after 2s
      const timer = setTimeout(() => {
        cardsData.forEach((_, index) => {
          setTimeout(() => {
            setVisibleCards((prev) => prev + 1);
          }, index * 300); // 300ms delay between cards
        });
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [inView]);

  // Lock the scroll while animation is playing
  useEffect(() => {
    if (!isAnimationComplete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Clean up on unmount
    };
  }, [isAnimationComplete]);

  return (
    <div className="w-full overflow-hidden z-10" ref={ref}>
      <div className="relative discover-left-card mb-[0vh]  ">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="lg:h-[100vh] h-[40vh]"
        >
          <Player
            ref={lottieRef}
            autoplay
            keepLastFrame
            src={animationData}
            className="w-full lg:h-[80vh] h-[40vh]"
            onEvent={(event) => {
              if (event === "complete") {
                setIsAnimationComplete(true);
              }
            }}
          />
        </div>
        {cardsData.slice(0, visibleCards).map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className={`${card.className} flex flex-col items-center justify-center p-4 rounded-lg shadow-lg bg-white  `}
          >
            {card.icon}
            <h4 className="mt-4 text-sm font-semibold">{card.title}</h4>
            <p className="mt-2 text-gray-600 text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center my-12">ABOUT US</h2>

      <div className="flex justify-center my-6">
        <p className="text-lg leading-relaxed max-w-3xl text-center">
          Halo Leaf is dedicated to providing eco-friendly, sustainable, and
          biodegradable dining solutions through our high-quality Siali leaf
          plates...
        </p>
      </div>

      <p className="text-lg leading-relaxed mt-8 text-center max-w-3xl m-auto py-10">
        Our mission at Halo Leaf is to reduce plastic waste and promote
        sustainable dining by offering 100% natural Siali leaf plates.
      </p>
    </div>
  );
};
