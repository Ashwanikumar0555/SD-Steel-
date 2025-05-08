import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import WhatsAppButton from "../common/WhatsAppButton";

// Example image imports (you'll need to update these paths)
import steelImage1 from "../assets/sariya.png";
import steelImage2 from "../assets/sariya 2.jpeg";
import steelImage3 from "../assets/sariya 3.jpeg";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const bgImages = [steelImage1, steelImage2, steelImage3];

  // Auto image rotation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Background Image Carousel */}
      {bgImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImageIndex ? 0.85 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/90 to-blue-200/90 z-10" />
          <img
            src={image}
            alt={`Steel background ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      {/* Foreground Content */}
      <div className="relative z-20 container mx-auto h-full px-4 md:px-6 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4 bg-blue-600/20 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <span className="text-blue-700 font-medium">
              Trusted Steel Supplier Since 2005
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block text-blue-900">SHRI DURGA</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
              STEEL
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-blue-800 mb-8 max-w-xl"
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
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-bold text-lg shadow-lg transition-all"
              >
                Request Quote
              </motion.button>
            </Link>

            <WhatsAppButton className="bg-green-600 hover:bg-green-700" />

            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-blue-600 text-blue-700 px-8 py-3 rounded-md font-bold text-lg hover:bg-blue-600/10 transition-all"
              >
                Our Products
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 flex items-center gap-8"
          >
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="ml-2 text-blue-700">Quality Assured</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="ml-2 text-blue-700">On-time Delivery</span>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="ml-2 text-blue-700">Best Prices</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNextSection}
      >
        <div className="flex flex-col items-center">
          <span className="text-blue-700 mb-2">Explore More</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="h-6 w-6 text-blue-600" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

