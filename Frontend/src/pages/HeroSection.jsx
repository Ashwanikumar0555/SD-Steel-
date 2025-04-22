import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WhatsAppButton from "../common/WhatsAppButton";
import sariyaImage from "../assets/sariya.png"; // this is an image, not a component

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={sariyaImage}
          alt="Steel background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 container mx-auto h-full px-4 md:px-6 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <span className="text-zinc-300 font-medium">
              Trusted Steel Supplier Since 2005
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
          >
            <span className="block">SHRI DURGA</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-400">
              STEEL
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-zinc-300 mb-8 max-w-xl"
          >
            Premium quality steel products for construction and industrial
            applications, sourced directly from top manufacturers.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/quote">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zinc-100 to-zinc-300 text-zinc-900 px-8 py-3 rounded-md font-bold text-lg hover:shadow-lg transition-all"
              >
                Request Quote
              </motion.button>
            </Link>

            <WhatsAppButton />

            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-zinc-300 text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white/10 transition-all"
              >
                Our Products
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
