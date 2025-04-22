"use client"
import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Send, 
  Clock, 
  Calendar, 
  Star,
  ChevronUp 
} from "lucide-react"
import WhatsAppButton from "../common/WhatsAppButton"
import Logo from "../common/Logo";

export default function Footer() {
  const [isBrowser, setIsBrowser] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscribeSuccess, setSubscribeSuccess] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Check if we're in the browser
  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return

    // Set browser state
    setIsBrowser(true)

    // Scroll listener for "back to top" button
    const handleScrollVisibility = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScrollVisibility)
    return () => window.removeEventListener("scroll", handleScrollVisibility)
  }, [])

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    if (isBrowser && typeof document !== "undefined") {
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubscribeSuccess(true)
      setEmail("")
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubscribeSuccess(false)
      }, 3000)
    }, 1000)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home", id: "home" },
        { name: "About Us", href: "#about", id: "about" },
        { name: "Products", href: "#products", id: "products" },
        { name: "Why Choose Us", href: "#why-choose-us", id: "why-choose-us" },
        { name: "Request Quote", href: "#quote", id: "quote" },
        { name: "Contact", href: "#contact", id: "contact" },
      ],
    },
    {
      title: "Products",
      links: [
        { name: "TMT Bars", href: "/products/tmt-bars" },
        { name: "Steel Rods", href: "/products/steel-rods" },
        { name: "Steel Sheets", href: "/products/steel-sheets" },
        { name: "MS/SS Pipes", href: "/products/pipes" },
        { name: "View All Products", href: "/products" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Steel Market Price", href: "/resources/market-price" },
        { name: "Blog", href: "/blog" },
        { name: "FAQs", href: "/faqs" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms-conditions" },
      ],
    },
  ]

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ]

  return (
    <footer className="bg-gradient-to-b from-sky-50 to-sky-100 text-gray-800 relative">
      {/* Curved Top Edge */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <div className="absolute -top-16 left-0 right-0 h-16 bg-white rounded-b-[50%] shadow-sm"></div>
      </div>
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all z-50 animate-bounce"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}

      {/* CTA Section */}
      <div className="container mx-auto px-4 md:px-6 py-16 pt-24">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid-pattern)" />
            </svg>
            <defs>
              <pattern id="grid-pattern" patternUnits="userSpaceOnUse" width="10" height="10">
                <rect fill="none" stroke="white" strokeWidth="0.5" width="10" height="10" />
              </pattern>
            </defs>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium mb-4">
                Ready to Elevate Your Construction?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Quality Steel Products for Your Projects</h2>
              <p className="text-blue-100 mb-6">
                Get in touch with our team for a personalized quote and expert advice on selecting the right steel
                products for your needs. We're here to support your construction journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#quote" onClick={(e) => handleSmoothScroll(e, "quote")}>
                  <button
                    className="bg-white text-blue-700 px-6 py-3 rounded-md font-bold hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-md"
                  >
                    Request a Quote <ArrowRight className="h-4 w-4" />
                  </button>
                </a>
                <WhatsAppButton />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h3>
              <p className="text-blue-100 mb-4">
                Stay updated with the latest products, steel market prices, and exclusive offers.
              </p>
              <form className="flex flex-col gap-2" onSubmit={handleEmailSubmit}>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-white text-blue-700 px-4 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors shadow-md flex items-center justify-center ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span className="inline-block w-5 h-5 border-2 border-blue-700 border-t-transparent rounded-full animate-spin mr-2"></span>
                  ) : subscribeSuccess ? (
                    "Subscribed!"
                  ) : (
                    <>
                      Subscribe <Send className="h-5 w-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Logo variant="light" size="large" />
            <p className="text-gray-700 my-6 max-w-md">
              Premium steel supplier serving West Bengal since 2005. We provide high-quality steel products for
              construction and industrial applications, sourced directly from top manufacturers.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-blue-700" />
                </div>
                <a href="tel:+919053719053" className="text-gray-700 hover:text-blue-700 transition-colors">
                  +91 90537 19053
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-blue-700" />
                </div>
                <a href="mailto:info@shridurgasteel.in" className="text-gray-700 hover:text-blue-700 transition-colors">
                  info@shridurgasteel.in
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full mt-1">
                  <MapPin className="h-5 w-5 text-blue-700" />
                </div>
                <address className="text-gray-700 not-italic">
                  Shri Durga Steel
                  <br />
                  123 Steel Market Road
                  <br />
                  Kolkata, West Bengal 700001
                  <br />
                  India
                </address>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <WhatsAppButton showText={false} className="!bg-blue-100 hover:!bg-green-600/80 text-blue-700 hover:text-white" />
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-100 p-3 rounded-full hover:bg-blue-700 text-blue-700 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-100 p-3 rounded-full hover:bg-blue-700 text-blue-700 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-100 p-3 rounded-full hover:bg-blue-700 text-blue-700 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-6 text-blue-700">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-blue-700 transition-colors flex items-center group"
                      onClick={(e) => {
                        if (link.href.startsWith("#") && link.id) {
                          handleSmoothScroll(e, link.id)
                        }
                      }}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="h-4 w-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Business Hours */}
          <div className="lg:col-span-1 md:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-blue-700">Business Hours</h4>
            <ul className="space-y-3">
              {businessHours.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    {item.day === "Sunday" ? (
                      <Calendar className="h-4 w-4 text-blue-700" />
                    ) : (
                      <Clock className="h-4 w-4 text-blue-700" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">{item.day}</p>
                    <p className="text-gray-600">{item.hours}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            {/* Awards/Certifications */}
            <h4 className="text-lg font-bold mb-4 mt-6 text-blue-700">Certifications</h4>
            <div className="flex gap-2 flex-wrap">
              {['ISO 9001', 'IS 1786', 'CE Mark'].map((cert, index) => (
                <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                  <Star className="w-3 h-3 mr-1" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-4">
          <h4 className="text-lg font-bold mb-4 text-blue-700 flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            Find Us
          </h4>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0410522173456!2d88.3517!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzIxLjQiTiA4OMKwMjEnMDYuMSJF!5e0!3m2!1sen!2sin!4v1618568119599!5m2!1sen!2sin" 
              className="absolute top-0 left-0 w-full h-full border-0" 
              allowFullScreen="" 
              loading="lazy"
              title="Shri Durga Steel location"
            ></iframe>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-blue-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Shri Durga Steel. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <Link href="/terms-conditions" className="text-gray-600 text-sm hover:text-blue-700 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="text-gray-600 text-sm hover:text-blue-700 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/sitemap" className="text-gray-600 text-sm hover:text-blue-700 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}