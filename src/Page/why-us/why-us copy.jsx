import React from "react";
import { motion } from "framer-motion";
import { 
  FaLeaf, 
  FaRecycle, 
  FaSeedling, 
  FaGlobe, 
  FaHandsHelping, 
  FaMedkit, 
  FaBiohazard, 
  FaUtensils 
} from "react-icons/fa";

export const WhyUs = () => {
  // Variants for tile animations on mount and hover
  const tileVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <div className="md:px-[10%] sm:px-[5%] px-4 py-8 mt-4">
      <h2 className="text-3xl font-bold text-center mb-8">ABOUT US</h2>
      <div className="space-y-8 text-center">
        {/* Main Content Section */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Halo Leaf is dedicated to providing eco-friendly, sustainable, and biodegradable dining solutions through our high-quality Siali leaf plates. Our products honor traditional craftsmanship while promoting a greener planet. Every plate is made with care, ensuring a natural, safe, and sustainable dining experience.
          </p>

          {/* Mission Tiles */}
          <div>
            <p className="text-lg leading-relaxed">
              Our mission at Halo Leaf is to reduce plastic waste and promote sustainable dining by offering 100% natural Siali leaf plates. We aim to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <motion.div 
                variants={tileVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
              >
                <FaLeaf className="text-green-500 text-5xl" />
                <h4 className="mt-4 text-xl font-semibold">Eco-Conscious Living</h4>
                <p className="mt-2 text-gray-600 text-sm">
                  Biodegradable & chemical-free tableware.
                </p>
              </motion.div>
          
              <motion.div 
                variants={tileVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
              >
                <FaRecycle className="text-green-500 text-5xl" />
                <h4 className="mt-4 text-xl font-semibold">Zero Waste</h4>
                <p className="mt-2 text-gray-600 text-sm">
                  Solutions that leave no environmental footprint.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Benefits Tiles */}
          <div>
            <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Halo Leaf’s Siali Leaf Plates?</h3>
            <p className="text-lg leading-relaxed mb-4">Benefits of Siali Leaf</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                variants={tileVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
              >
                <FaSeedling className="text-green-500 text-5xl" />
                <h4 className="mt-4 text-xl font-semibold">Natural & Biodegradable</h4>
                <p className="mt-2 text-gray-600 text-sm">
                  100% natural and fully biodegradable.
                </p>
              </motion.div>
              <motion.div 
                variants={tileVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
              >
                <FaGlobe className="text-green-500 text-5xl" />
                <h4 className="mt-4 text-xl font-semibold">Eco-Friendly</h4>
                <p className="mt-2 text-gray-600 text-sm">
                  Renewable and sustainable for a greener future.
                </p>
              </motion.div>
              <motion.div 
                variants={tileVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
              >
                <FaHandsHelping className="text-green-500 text-5xl" />
                <h4 className="mt-4 text-xl font-semibold">Rural Livelihoods</h4>
                <p className="mt-2 text-gray-600 text-sm">
                  Supporting communities and tribal artisans.
                </p>
              </motion.div>
            </div>

            {/* Health Benefits Tiles */}
            <div>
              <h3 className="text-2xl font-bold mt-8 mb-4">Health Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div 
                  variants={tileVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
                >
                  <FaMedkit className="text-green-500 text-5xl" />
                  <h4 className="mt-4 text-xl font-semibold">Chemical-Free</h4>
                  <p className="mt-2 text-gray-600 text-sm">
                    Non-toxic for a healthier meal.
                  </p>
                </motion.div>
                <motion.div 
                  variants={tileVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
                >
                  <FaBiohazard className="text-green-500 text-5xl" />
                  <h4 className="mt-4 text-xl font-semibold">Antibacterial</h4>
                  <p className="mt-2 text-gray-600 text-sm">
                    Naturally prevents bacteria growth.
                  </p>
                </motion.div>
                <motion.div 
                  variants={tileVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
                >
                  <FaUtensils className="text-green-500 text-5xl" />
                  <h4 className="mt-4 text-xl font-semibold">Enhanced Dining</h4>
                  <p className="mt-2 text-gray-600 text-sm">
                    Elevates taste and aroma.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
};
