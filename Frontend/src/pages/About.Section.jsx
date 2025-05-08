


"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import Sariya from "../assets/Sariya4.jpeg"
import React from "react"
import {
  Shield,
  Award,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MessageCircle,
  X,
} from "lucide-react"
import { Link } from "react-router-dom"

const achievements = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "18+ Years",
    description: "Of industry experience",
    color: "bg-blue-100 text-blue-600",
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
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "ISO 9001",
    description: "Quality certified",
    color: "bg-blue-100 text-blue-600",
  },
]

const testimonials = [
  {
    name: "Rajesh Sharma",
    position: "Construction Manager",
    company: "Sharma Builders",
    image: "/placeholder.svg?height=100&width=100",
    content: "Shri Durga Steel has been our trusted supplier for over 7 years. Their consistent quality and on-time delivery have made them our go-to steel partner.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    position: "Project Director",
    company: "Patel Infrastructure",
    image: "/placeholder.svg?height=100&width=100",
    content: "Working with Shri Durga Steel has significantly improved our project timelines. Their customer service is exceptional and their products are top-notch.",
    rating: 5,
  },
  {
    name: "Amit Banerjee",
    position: "CEO",
    company: "Banerjee Constructions",
    image: "/placeholder.svg?height=100&width=100",
    content: "As a long-time customer, I've always been impressed with their dedication to quality and competitive pricing. Highly recommended for any construction needs.",
    rating: 4,
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
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [showContactForm, setShowContactForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setShowContactForm(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-blue-50 to-blue-100 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-blue-300 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-blue-400 opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-20 h-1 bg-blue-500 mb-6"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-800"
          >
            About Shri Durga Steel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-blue-700 max-w-3xl text-center"
          >
            Your trusted partner for premium steel products since 2005
          </motion.p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500"
            >
              <div
                className={`${item.color} p-3 rounded-full inline-flex items-center justify-center mb-4`}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-1 text-blue-800">{item.title}</h3>
              <p className="text-blue-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* About Image & Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center" ref={ref}>
          {/* Image Side */}
          <motion.div style={{ y, opacity }} className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={Sariya}
                alt="Shri Durga Steel Facility"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-lg -z-10"></div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-10 right-10 bg-white p-4 rounded-lg shadow-xl flex items-center gap-3"
            >
              <Shield className="h-10 w-10 text-blue-600" />
              <div>
                <h4 className="font-bold text-blue-800">Trusted Quality</h4>
                <p className="text-sm text-blue-600">Since 2005</p>
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
            <h3 className="text-2xl font-bold mb-6 text-blue-800">Our Story</h3>
            <div className="space-y-6 text-lg text-blue-700">
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
              <h3 className="font-bold text-xl mb-4 text-blue-800">Cities We Serve</h3>
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
                    className="bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full text-sm border border-blue-200 text-blue-700 shadow-sm transition-colors"
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
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center shadow-md"
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

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors inline-flex items-center shadow-sm"
                onClick={() => setShowContactForm(true)}
              >
                Contact Us
                <MessageCircle className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>

       
       
        {/* Contact Form Modal */}
        {showContactForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-lg relative"
            >
              <button
                onClick={() => setShowContactForm(false)}
                className="absolute top-4 right-4 text-blue-800 hover:text-blue-600"
              >
                <X className="h-6 w-6" />
              </button>
              
              <h3 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
                <Mail className="mr-2 h-6 w-6" />
                Get in Touch
              </h3>
              
              {formSubmitted ? (
                <div className="bg-green-100 border-l-4 border-green-600 p-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <p className="text-green-600 font-medium">Your message has been sent successfully!</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-blue-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-blue-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-blue-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full p-3 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end pt-2">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-green-600 hover:bg-green-700 text-white font-medium rounded-md px-6 py-3 inline-flex items-center shadow-md"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send Message
                    </motion.button>
                  </div>
                </form>
              )}
              
              <div className="mt-6 pt-6 border-t border-blue-100">
                <h4 className="text-lg font-semibold mb-3 text-blue-800 flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Directly
                </h4>
                <div className="flex flex-col space-y-2 text-blue-700">
                  <p>Phone: +91 98765 43210</p>
                  <p>Email: info@shridurgasteel.com</p>
                  <p>Address: Kolkata, West Bengal, India</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}


