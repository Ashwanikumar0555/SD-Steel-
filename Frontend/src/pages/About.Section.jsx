"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import React from "react"
import {
  Shield,
  Award,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { Link } from "react-router-dom";

const achievements = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "18+ Years",
    description: "Of industry experience",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "1000+",
    description: "Satisfied customers",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "24/7",
    description: "Customer support",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "ISO 9001",
    description: "Quality certified",
    color: "bg-purple-100 text-purple-600",
  },
]

export default function AboutSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
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
            About Shri Durga Steel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl text-center"
          >
            Your trusted partner for premium steel products since 2005
          </motion.p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`${item.color} p-3 rounded-full inline-flex items-center justify-center mb-4`}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* About Image & Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center" ref={ref}>
          {/* Image Side */}
          <motion.div style={{ y, opacity }} className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Shri Durga Steel Facility"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-500/10 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-500/10 rounded-lg -z-10"></div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-10 right-10 bg-white p-4 rounded-lg shadow-xl flex items-center gap-3"
            >
              <Shield className="h-10 w-10 text-yellow-500" />
              <div>
                <h4 className="font-bold">Trusted Quality</h4>
                <p className="text-sm text-gray-600">Since 2005</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Our Story</h3>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Founded in 2005, Shri Durga Steel is a West Bengal-based top
                supplier associated with JSW, Shyam Steel, and other leading
                manufacturers.
              </p>
              <p>
                For over 18 years, we've maintained our commitment to quality,
                reliability, and customer satisfaction. Today, we supply premium
                steel products to major construction projects across the state.
              </p>
              <p>
                Our product range includes TMT bars, rods, sheets, pipes,
                angles, and channels, all from top manufacturers like TATA,
                JSW, SAIL, and Shyam Steel.
              </p>
            </div>

            {/* Cities Served */}
            <div className="mt-8">
              <h3 className="font-bold text-xl mb-4">Cities We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Kolkata",
                  "Howrah",
                  "Durgapur",
                  "Asansol",
                  "Siliguri",
                  "Kharagpur",
                  "Haldia",
                  "Bardhaman",
                  "Malda",
                  "Jalpaiguri",
                ].map((city, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="bg-gray-100 hover:bg-yellow-100 px-3 py-1 rounded-full text-sm border border-gray-200 shadow-sm transition-colors"
                  >
                    {city}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#why-choose-us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors inline-flex items-center shadow-md"
                  onClick={(e) => {
                    e.preventDefault()
                    document
                      .getElementById("why-choose-us")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Why Choose Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </Link>

              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-black text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block shadow-sm"
                >
                  Learn More About Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
