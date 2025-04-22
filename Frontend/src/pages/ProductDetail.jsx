"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Check, Info, ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "../common/WhatsAppButton";

export default function ProductDetail({ product = {} }) {
  const {
    gallery = [],
    name = "Product Name",
    rating = 0,
    totalRatings = 0,
    price = "Price not available",
    description = "No description available",
    specs = [],
    manufacturers = [],
    longDescription = "",
    features = [],
    applications = [],
  } = product;

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const nextImage = () => {
    setActiveImage((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-zinc-500 mb-6">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/products" className="hover:text-primary transition-colors">
            Products
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-zinc-800 font-medium">{name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-video bg-zinc-100 rounded-lg overflow-hidden">
              <motion.img
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={gallery[activeImage] || "/placeholder.svg"}
                alt={`${name} image ${activeImage + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5 text-zinc-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5 text-zinc-800" />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 overflow-x-scroll pb-2">
              {gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                    activeImage === index ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${
                      star <= Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-zinc-600">
                {rating} ({totalRatings} reviews)
              </span>
            </div>

            <p className="text-xl font-semibold text-primary mb-4">{price}</p>

            <p className="text-zinc-600 mb-6">{description}</p>

            {/* Key Specifications */}
            <div className="bg-zinc-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Key Specifications:</h3>
              <ul className="space-y-1">
                {specs.slice(0, 4).map((spec, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>
                      <span className="font-medium">{spec.name}:</span> {spec.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/quote">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors shadow-md flex items-center gap-2"
                >
                  Request Quote <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>

              <WhatsAppButton />

              <a
                href="tel:+919053719053"
                className="border border-zinc-300 bg-white text-zinc-800 px-6 py-3 rounded-md font-medium hover:bg-zinc-50 transition-colors flex items-center gap-2"
              >
                Call for Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}