"use client"

import { useState, useRef } from "react"
import React from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Star, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import WhatsAppButton from "../common/WhatsAppButton"

const products = [
  {
    id: "tmt-bars",
    name: "TMT Fe 500 Bars",
    description: "High-strength thermo-mechanically treated steel bars for construction",
    image: "/placeholder.svg?height=400&width=600",
    specs: "Fe 500, Diameter: 8mm to 32mm",
    price: "₹58,000 - ₹62,000 per ton",
    rating: 4.8,
    totalRatings: 124,
    popular: true,
  },
  {
    id: "steel-rods",
    name: "MS Round Bars",
    description: "Mild steel round bars for various structural applications",
    image: "/placeholder.svg?height=400&width=600",
    specs: "Diameter: 6mm to 50mm",
    price: "₹55,000 - ₹58,000 per ton",
    rating: 4.5,
    totalRatings: 87,
    popular: false,
  },
  {
    id: "steel-sheets",
    name: "HR Steel Sheets",
    description: "Hot rolled steel sheets with excellent formability",
    image: "/placeholder.svg?height=400&width=600",
    specs: "Thickness: 2mm to 12mm",
    price: "₹65,000 - ₹70,000 per ton",
    rating: 4.4,
    totalRatings: 72,
    popular: true,
  },
  {
    id: "pipes",
    name: "MS Pipes",
    description: "Mild steel pipes for structural and fluid transportation",
    image: "/placeholder.svg?height=400&width=600",
    specs: "Diameter: 15mm to 150mm",
    price: "₹60,000 - ₹65,000 per ton",
    rating: 4.3,
    totalRatings: 91,
    popular: false,
  },
]

export default function ProductShowcase() {
  const [hoveredId, setHoveredId] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="products" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Products</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            We offer a wide range of high-quality steel products to meet all your construction and industrial needs.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 },
              }}
              className="group relative overflow-hidden rounded-lg bg-white border border-zinc-200 transition-all duration-300 transform perspective-1000"
            >
              {product.popular && (
                <div className="absolute top-3 right-3 z-10 bg-accent text-white text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  Popular
                </div>
              )}

              <div className="aspect-video overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  animate={{
                    scale: hoveredId === product.id ? 1.1 : 1,
                  }}
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="text-white">
                    <h4 className="font-bold">{product.name}</h4>
                    <p className="text-sm text-zinc-300">{product.specs}</p>
                  </div>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>

                <div className="flex items-center gap-1 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-zinc-500 text-xs">({product.totalRatings})</span>
                </div>

                <p className="text-zinc-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="text-sm font-medium text-zinc-500 mb-2">Specs: {product.specs}</div>
                <p className="font-medium text-primary mb-4">{product.price}</p>

                <div className="flex justify-between items-center">
                  <Link href={`/products/${product.id}`}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center text-primary font-medium"
                    >
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </Link>

                  <WhatsAppButton
                    showText={false}
                    message={`Hi, I'm interested in ${product.name} from Shri Durga Steel.`}
                  />
                </div>
              </div>

              {/* Optional animated floating circles for 3D feel */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-10 -top-10 w-20 h-20 bg-primary/5 rounded-full transform group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -right-10 -bottom-10 w-20 h-20 bg-accent/5 rounded-full transform group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors shadow-md"
            >
              View All Products
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
