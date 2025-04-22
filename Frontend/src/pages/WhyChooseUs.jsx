"use client"
import React from "react"
import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Award, ShieldCheck, Truck, DollarSign, CheckCircle, Users } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { Float, OrbitControls } from "@react-three/drei"

function TMTBarModel() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.1, 0.1, 4, 16]} />
        <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
      </mesh>
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={i} position={[0, i * 0.2 - 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.13, 0.02, 8, 16]} />
          <meshStandardMaterial color="#777777" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}
    </Float>
  )
}

const reasons = [
  {
    icon: <Award className="h-8 w-8" />,
    title: "18+ Years of Experience",
    description: "Established in 2005, we bring decades of expertise to every order.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: "100% Genuine Product Guarantee",
    description: "We never compromise on quality. All our products are authentic and certified.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Trusted by 100+ Builders",
    description: "Leading construction companies across West Bengal rely on our products.",
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Fast Delivery",
    description: "We understand the importance of timelines in construction projects.",
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Affordable Price",
    description: "Competitive pricing without compromising on quality.",
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "ISO Certified Quality",
    description: "Our products meet international quality standards and certifications.",
  },
]

export default function WhyChooseUs() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true)
    }
  }, [])

  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-zinc-100 to-zinc-200">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            For over 18 years, we've been the trusted steel supplier for businesses across West Bengal. Here's why our customers choose Shri Durga Steel.
          </p>
        </motion.div>

        <div className="mb-20 bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Premium Quality TMT Bars</h3>
                <p className="text-zinc-600 mb-6">
                  Our TMT bars are sourced directly from top manufacturers like TATA Steel, JSW, and SAIL, ensuring the highest quality for your construction projects. These bars undergo rigorous quality checks and are certified to meet all industry standards.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Superior Strength & Durability</h4>
                      <p className="text-zinc-600 text-sm">
                        Our TMT bars offer excellent tensile strength and ductility, ensuring long-lasting structures.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Corrosion Resistant</h4>
                      <p className="text-zinc-600 text-sm">
                        Enhanced corrosion resistance for better performance in various environmental conditions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">ISI Certified</h4>
                      <p className="text-zinc-600 text-sm">
                        All our TMT bars come with proper certification and meet BIS standards.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="h-[400px] relative">
              {isMounted && (
                <Canvas>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <TMTBarModel />
                  <ambientLight intensity={0.8} />
                  <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
              )}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none md:hidden">
                <div className="bg-zinc-900/70 text-white px-6 py-3 rounded-lg text-center">
                  <h3 className="text-xl font-bold">Premium Quality TMT Bars</h3>
                  <p>Certified by top manufacturers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-primary">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-zinc-600 flex-grow">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 bg-white p-8 rounded-lg shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">What Our Customers Say</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-zinc-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Rajesh Kumar</h4>
                  <p className="text-sm text-zinc-500">Construction Manager, Kolkata</p>
                </div>
              </div>
              <p className="text-zinc-600 italic">
                "We've been sourcing our TMT bars from Shri Durga Steel for over 5 years now. Their quality is consistently excellent, and their delivery is always on time. Highly recommended!"
              </p>
            </div>

            <div className="bg-zinc-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-zinc-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Amit Sharma</h4>
                  <p className="text-sm text-zinc-500">Project Director, Durgapur</p>
                </div>
              </div>
              <p className="text-zinc-600 italic">
                "The quality of steel from Shri Durga Steel is exceptional. Their TMT bars meet all the required standards, and their customer service is outstanding. They're our go-to supplier for all steel requirements."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
