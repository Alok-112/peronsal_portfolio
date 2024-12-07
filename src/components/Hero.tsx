import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-50 via-blue-50 to-cyan-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            BCA Graduate & Web Developer
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Passionate about building dynamic and responsive user interfaces using React Native
            and modern web technologies.
          </motion.p>
          <motion.button
            whileHover={{ 
              scale: 1.1,
              background: "linear-gradient(to right, #8B5CF6, #3B82F6, #06B6D4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold
                     shadow-lg transform transition-all duration-300"
          >
            View My Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;