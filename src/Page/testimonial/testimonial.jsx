import React from "react";
import { motion } from "framer-motion";

export const Testimonial = () => {
  // Animation variants for each section
  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.02, transition: { duration: 0.3 } }
  };

  return (
    <div className="md:px-[10%] sm:px-[5%] px-4 py-8 mt-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Artisans & Heritage</h2>
      <div className="space-y-12">
        {/* Section 1: Traditional Craftsmanship */}
        <motion.div 
          variants={sectionVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <motion.img 
            src="src/assets/DALL·E 2025-03-20 01.14.59 - An elegant Art Nouveau style illustration of Indian indigenous artisans in a lush tropical forest, crafting biodegradable leaf plates from Butea monos.webp" 
            alt="Traditional Craftsmanship"
            className="w-full h-64 object-cover rounded-md"
            variants={sectionVariants}
          />
          <div className="text-center mt-4">
            <h3 className="text-2xl font-bold">Deeply Rooted in Tradition</h3>
            <p className="text-lg mt-4 leading-relaxed">
              The artisans who craft Siali leaf plates are steeped in tradition, hailing from indigenous and rural communities where this art has been cherished for generations. With skills passed down through time, they gather, clean, and transform Siali leaves using natural fibers. Their meticulous craft turns simple leaves into durable, biodegradable plates that honor both heritage and sustainability.
            </p>
          </div>
        </motion.div>

        {/* Section 2: Empowering Women */}
        <motion.div 
          variants={sectionVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <motion.img 
            src="src/assets/DALL·E 2025-03-20 01.16.47 - A detailed Art Nouveau style illustration of empowered Indian women artisans working together in a bright, naturally lit workshop. The scene features .webp" 
            alt="Empowering Women Artisans"
            className="w-full h-64 object-cover rounded-md"
            variants={sectionVariants}
          />
          <div className="text-center mt-4">
            <h3 className="text-2xl font-bold">Empowering Women at Halo Leaf</h3>
            <p className="text-lg mt-4 leading-relaxed">
              At Halo Leaf, women are the heart of our craft. Originating from communities with limited opportunities, these skilled artisans bring their traditional expertise to every plate they create. Through their work, they not only produce eco-friendly Siali leaf plates but also gain financial independence, support their families, and uplift their communities. Their passion and precision make each plate a symbol of resilience and sustainability.
            </p>
          </div>
        </motion.div>

        {/* Section 3: Sustainable Revolution */}
        <motion.div 
          variants={sectionVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <motion.img 
            src="src/assets/DALL·E 2025-03-20 02.24.49 - A beautifully detailed Art Nouveau style illustration of a dining scene in a modern yet natural setting. The table is rustic wood, elegantly arranged .webp" 
            alt="Sustainable Revolution"
            className="w-full h-64 object-cover rounded-md"
            variants={sectionVariants}
          />
          <div className="text-center mt-4">
            <h3 className="text-2xl font-bold">Leading a Sustainable Revolution</h3>
            <p className="text-lg mt-4 leading-relaxed">
              Beyond preserving an age-old craft, our work provides vital income for artisans, especially women. By creating and promoting eco-friendly plates, they support their families while championing sustainable alternatives to plastic. As global demand for greener solutions grows, these artisans stand at the forefront of a sustainable revolution—melding ancient wisdom with modern environmental needs.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
