"use client"
import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Check, Home, Shield, Award, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function DreamHome() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-20 h-1 bg-yellow-500 mb-6"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Your Dream Home One-Stop-Shop
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl text-center"
          >
            Building your dream home requires the best materials for a strong foundation and structure
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="inline-flex items-center bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full mb-6">
              <Home className="h-5 w-5 mr-2" />
              <span className="font-medium">Build Strong, Live Safe</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6">Premium Steel for Your Dream Home</h3>

            <p className="text-lg text-gray-600 mb-8">
              At Shri Durga Steel, we provide premium quality TMT bars and steel products that ensure your home stands
              strong for generations to come. Our products are sourced directly from leading manufacturers and undergo
              rigorous quality checks.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Superior Strength",
                  desc: "Our TMT bars provide exceptional strength and durability for your home's structure.",
                },
                {
                  title: "Earthquake Resistant",
                  desc: "Our steel products offer excellent ductility, making your home more resistant to seismic activities.",
                },
                {
                  title: "Corrosion Resistant",
                  desc: "Enhanced corrosion resistance ensures longevity even in humid conditions.",
                },
              ].map((item, idx) => (
                <div className="flex items-start gap-3" key={idx}>
                  <div className="bg-green-100 p-1 rounded-full">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-500 text-black px-6 py-3 rounded-md font-medium hover:bg-yellow-400 transition-colors shadow-md inline-flex items-center"
                >
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </Link>

              <Link href="/quote">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-black text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  Request a Quote
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div style={{ y, opacity }} className="relative order-1 md:order-2">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Modern Home Construction"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl flex items-center gap-3"
            >
              <Shield className="h-10 w-10 text-blue-600" />
              <div>
                <h4 className="font-bold">50+ Years</h4>
                <p className="text-sm text-gray-600">Durability Guarantee</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-xl flex items-center gap-3"
            >
              <Award className="h-10 w-10 text-yellow-600" />
              <div>
                <h4 className="font-bold">ISO 9001</h4>
                <p className="text-sm text-gray-600">Certified Quality</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-24 bg-gray-50 p-8 rounded-xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">More Strength = More Savings</h3>
              <p className="mb-4 text-gray-600">
                More load carrying capacity of the rebars. For a given design load, fewer number of rebars or reduced
                diameter is required.
              </p>
              <ul className="space-y-3">
                {[
                  "Minimum YS of 570*MPa (More than IS1786:2008 – 550MPa)",
                  "Easily carries design load without any structural cracks",
                  "Optimised design leads to reduce steel consumption",
                  "Up to 6%^ savings on steel quantity",
                ].map((point, idx) => (
                  <li className="flex items-start gap-2" key={idx}>
                    <Check className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-4">
                * Typical value as obtained in 95% of the cases
                <br />^ Savings % based on study done for 500 and 550 grade rebar for typical RCC frame (SMRF)
                configurations
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Steel strength comparison"
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
