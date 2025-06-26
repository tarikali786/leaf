import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Img1 from "../../assets/1.png";
import Img2 from "../../assets/2.png";
import Img3 from "../../assets/3.png";
import { FAQ } from "../../component";

export const ContactUs = () => {
  const images = [Img1, Img2, Img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  // Smooth fade with a slight zoom-out effect
  const transitionVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 0.95, transition: { duration: 1, ease: "easeInOut" } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 1, ease: "easeInOut" } },
  };

  const faqs = [
    {
      question: "What are Halo Leaf Siali Leaf Plates?",
      answer:
        "Halo Leaf Siali leaf plates are eco-friendly, 100% natural dining solutions crafted from Siali leaves. They offer a biodegradable and chemical-free alternative to traditional plastic or paper tableware, ensuring a safe and sustainable dining experience.",
    },
    {
      question: "How are these leaf plates made?",
      answer:
        "Our plates are made using traditional methods passed down through generations. Artisans carefully collect Siali leaves from forests, then clean, dry, and stitch them together with natural fibers such as bamboo or sal bark. This meticulous process not only creates a durable product but also honors ancient craftsmanship.",
    },
    {
      question: "What benefits do Siali leaf plates offer?",
      answer:
        "The plates provide multiple benefits: Eco-Friendly & Biodegradable, Chemical-Free & Non-Toxic, and Naturally Antibacterial, which helps maintain food hygiene while enhancing taste and aroma.",
    },
    {
      question: "How does Halo Leaf promote sustainability?",
      answer:
        "By offering a zero-waste, renewable alternative to disposable tableware, Halo Leaf helps reduce plastic waste and its environmental impact. Each plate is designed to leave no lasting footprint on the planet, aligning with eco-conscious and sustainable living practices.",
    },
    {
      question: "Who crafts these plates?",
      answer:
        "Our plates are handcrafted by skilled artisans from indigenous and rural communities. These craftspeople, many of whom are women, bring traditional expertise and dedication to every piece, transforming natural Siali leaves into functional, eco-friendly tableware.",
    },
    {
      question: "How does Halo Leaf support local communities?",
      answer:
        "Halo Leaf is committed to uplifting rural communities by providing steady employment and fair wages to its artisans. This not only sustains an age-old craft but also empowers women and supports local economies, creating a positive social impact alongside environmental benefits.",
    },
    {
      question: "What makes dining on Siali leaf plates a healthier choice?",
      answer:
        "Eating on Siali leaf plates is beneficial because they are free from harmful chemicals and are naturally antibacterial. This ensures that your food retains its natural taste and aroma, offering a clean and health-conscious alternative to conventional tableware.",
    },
  ];

  return (
    <div className="md:px-[10%] sm:px-[5%] px-2 py-4 mt-2">
      <h2 className="md:text-2xl text-xl font-semibold">CONTACT US</h2>
      <div className="rounded-xl overflow-hidden mt-4 relative md:h-[60vh] h-[40vh]">
        <AnimatePresence exitBeforeEnter>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="absolute top-0 left-0 -z-10 object-contain h-full w-full"
            variants={transitionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </AnimatePresence>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 text-center mt-5 md:gap-2 gap-6">
        <div>
          <h3 className="md:text-lg font-semibold text-gray-800">Phone Number</h3>
          <p className="mt-1">+91-9876543212</p>
        </div>
        <div>
          <h3 className="md:text-lg font-semibold text-gray-800">EMAIL ADDRESS</h3>
          <p className="mt-1">electmyscooter@gmail.com</p>
        </div>
        <div>
          <h3 className="md:text-lg font-semibold text-gray-800">OFFICE ADDRESS</h3>
          <p className="mt-1">LINE 1 LINE 2 LINE 3</p>
        </div>
        <div>
          <h3 className="md:text-lg font-semibold text-gray-800">GST NUMBER || IMPORTANT NUMBER</h3>
          <p className="mt-1">NUMBER 1</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="md:text-2xl text-xl font-semibold mb-4">FAQ</h2>
        {faqs.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
