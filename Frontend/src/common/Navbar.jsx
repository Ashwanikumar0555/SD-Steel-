import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Quote, Phone, Mail, Search, ShoppingCart, User, MapPin, Clock } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../common/Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const menuRef = useRef(null);
  const searchInputRef = useRef(null);
  const scrollListenerRef = useRef(null);
  const location = useLocation();
  const navHeight = 70;
  
  // Handle scroll events with improved visibility logic
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Show/hide navbar based on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 150) {
      // Scrolling down & past threshold - hide the navbar
      setIsVisible(false);
    } else {
      // Scrolling up or at top - show the navbar
      setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY);
    setIsScrolled(currentScrollY > 10);
  }, [lastScrollY]);

  // Initialize scroll listener and cleanup
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    scrollListenerRef.current = handleScroll;

    return () => {
      if (scrollListenerRef.current) {
        window.removeEventListener("scroll", scrollListenerRef.current);
      }
    };
  }, [handleScroll]);

  // Measure mobile menu height for animations
  useEffect(() => {
    if (menuRef.current) {
      const height = menuRef.current.scrollHeight;
      // Ensure menu doesn't exceed viewport
      const maxHeight = window.innerHeight - 136; // topbar + navbar height
      const adjustedHeight = Math.min(height, maxHeight);
      menuRef.current.style.maxHeight = `${adjustedHeight}px`;
    }
  }, [isMenuOpen]);

  // Focus search input when search is opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle escape key to close menu and search
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isSearchOpen]);

  const languages = {
    en: "English",
    hi: "हिंदी",
    es: "Español"
  };

  const navLinks = [
    { name: "Home", path: "/", id: "home" },
    { name: "About", path: "/about", id: "about" },
    { name: "Products", path: "/products", id: "products" },
    { name: "Projects", path: "/projects", id: "projects" },
    { name: "Why Choose Us", path: "/why-choose-us", id: "why-choose-us" },
    { name: "Contact Us", path: "/contact", id: "contact" },
  ];

  // Calculate navbar top position (topbar height)
  const topbarHeight = 60; // Fixed topbar height

  return (
    <div>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
        className={`fixed left-0 right-0 z-40 w-full ${
          isScrolled 
            ? "bg-white shadow-md" 
            : "bg-gradient-to-r from-blue-50 to-indigo-50"
        } transition-all duration-300`}
        style={{ top: topbarHeight, height: `${navHeight}px` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex items-center"
            >
              <Link to="/">
                <Logo variant="dark" />
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-1 items-center">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `relative font-medium transition-colors duration-200 text-sm px-3 py-2 rounded-md ${
                      isActive
                        ? "text-blue-700 font-semibold"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        {isActive && (
                          <motion.div
                            layoutId="activeNavLink"
                            className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-blue-500"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
              
              {/* Action Buttons */}
              <div className="flex gap-2 ml-2">
                
                
                {/* Quote Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  <Link
                    to="/quote"
                    className="flex items-center gap-2 font-medium text-sm px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Quote className="w-4 h-4" />
                    <span>Get a Quote</span>
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-3">
              {/* Mobile Search Button */}
              <button
                className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-200"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-start justify-center pt-32"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-2xl mx-4 bg-white rounded-xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 flex items-center gap-3 border-b border-gray-100">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search for steel products, services, or information..."
                  className="flex-1 border-none outline-none text-lg"
                  autoFocus
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              <div className="p-4 pb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-3">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {["Steel Pipes", "MS Plates", "TMT Bars", "GI Sheets", "Steel Angles", "Price List"].map((term) => (
                    <button 
                      key={term} 
                      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: "auto",
              transition: { duration: 0.3 }
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: { duration: 0.2 }
            }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg text-gray-800 fixed top-[130px] left-0 right-0 z-50 overflow-y-auto"
          >
            <div className="px-6 pt-6 pb-24 flex flex-col gap-1">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: 0.1 + index * 0.05, duration: 0.3 }
                    }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`py-4 text-lg font-medium block ${
                        isActive
                          ? "text-blue-700 border-l-4 border-blue-600 pl-4 bg-blue-50"
                          : "text-gray-800 hover:text-blue-700 border-l-4 border-transparent pl-4 hover:bg-gray-50"
                      } transition-all duration-200 rounded-r-md`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{link.name}</span>
                        <ChevronRight className={`h-5 w-5 ${
                          isActive ? "text-blue-600" : "text-gray-400"
                        }`} />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Mobile call-to-action buttons */}
              <div className="mt-6 flex flex-col gap-3">
                {/* Get a Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <Link
                    to="/quote"
                    onClick={() => setIsMenuOpen(false)}
                    className="py-4 text-lg font-medium flex items-center justify-center gap-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Quote className="h-5 w-5" />
                    Get a Quote
                  </Link>
                </motion.div>
                
                {/* E-catalog download */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.3 }}
                >
                  <Link
                    to="/catalog"
                    onClick={() => setIsMenuOpen(false)}
                    className="py-4 text-lg font-medium flex items-center justify-center gap-2 bg-gray-100 text-gray-800 rounded-md shadow-md hover:bg-gray-200 transition-colors duration-200"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Download Catalog
                  </Link>
                </motion.div>
              </div>
              
              {/* Language Selection */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Select Language</p>
                <div className="flex gap-2">
                  {Object.entries(languages).map(([code, name]) => (
                    <button 
                      key={code}
                      onClick={() => setLanguage(code)}
                      className={`px-3 py-2 rounded ${
                        language === code 
                          ? "bg-blue-600 text-white font-medium" 
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quick contact options */}
              <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col gap-3">
                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Quick Contact</p>
                
                <a href="tel:+123456789" className="flex items-center gap-3 text-gray-800 py-2">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>+1 (234) 567-890</span>
                </a>
                
                <a href="mailto:info@example.com" className="flex items-center gap-3 text-gray-800 py-2">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>info@example.com</span>
                </a>
                
                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-gray-800 py-2">
                  <div className="bg-blue-100 rounded-full p-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <span>Industrial Area, Phase 2</span>
                    <p className="text-sm text-gray-500">Delhi, India</p>
                  </div>
                </Link>
              </div>
              
              {/* Company Info */}
              <div className="mt-auto pt-6 border-t border-gray-200 text-sm text-gray-500">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <p className="font-medium text-gray-800">Shri Durga Steel</p>
                  <p className="mt-1">Premium steel supplier since 2005</p>
                  <p className="mt-4">© {new Date().getFullYear()} All rights reserved</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
  );
}


///////////////////////////////
