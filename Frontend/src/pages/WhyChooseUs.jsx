"use client"
import React from "react"
import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Sariya1 from "../assets/sariya.png"
import { 
  Award, 
  ShieldCheck, 
  Truck, 
  DollarSign, 
  CheckCircle, 
  Users, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Calculator,
  MessageSquare,
  Moon,
  Sun,
  X,
  Loader,
  Send,
  Info,
  HelpCircle,
  RefreshCw,
  Search,
  ThumbsUp,
  BarChart3,
  BrainCircuit
} from "lucide-react"
import Image from "../assets/sariya 3.jpeg"
import * as THREE from 'three'

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

const testimonials = [
  {
    name: "Rajesh Kumar",
    position: "Construction Manager, Kolkata",
    image: "/placeholder-avatar-1.jpg",
    rating: 5,
    comment: "We've been sourcing our TMT bars from Shri Durga Steel for over 5 years now. Their quality is consistently excellent, and their delivery is always on time. Highly recommended!",
    project: "Multi-story Residential Complex",
    date: "January 15, 2025"
  },
  {
    name: "Amit Sharma",
    position: "Project Director, Durgapur",
    image: "/placeholder-avatar-2.jpg",
    rating: 5,
    comment: "The quality of steel from Shri Durga Steel is exceptional. Their TMT bars meet all the required standards, and their customer service is outstanding. They're our go-to supplier for all steel requirements.",
    project: "Commercial Office Building",
    date: "March 3, 2025"
  },
  {
    name: "Priya Desai",
    position: "Civil Engineer, Howrah",
    image: "/placeholder-avatar-3.jpg", 
    rating: 4,
    comment: "Shri Durga Steel's consistent quality and reliable delivery have made them our preferred supplier. They understand our requirements perfectly and always deliver on their promises.",
    project: "Highway Bridge Construction",
    date: "February 22, 2025"
  },
  {
    name: "Sunil Mehta",
    position: "Contractor, Siliguri",
    image: "/placeholder-avatar-4.jpg",
    rating: 5,
    comment: "As a contractor handling multiple projects, I need suppliers I can depend on. Shri Durga Steel has never let me down with their premium quality products and excellent service.",
    project: "Government School Construction",
    date: "April 10, 2025"
  },
]

const productFeatures = [
  {
    title: "Superior Strength & Flexibility",
    description: "Our TMT bars offer excellent tensile strength and ductility for safer structures.",
    icon: <CheckCircle className="h-5 w-5 text-blue-600" />,
    detail: "Tensile strength up to 600 MPa, with 20% elongation at break"
  },
  {
    title: "Advanced Corrosion Resistance",
    description: "Enhanced protection against environmental factors for longer-lasting construction.",
    icon: <ShieldCheck className="h-5 w-5 text-blue-600" />,
    detail: "Special alloy coating provides up to 25 years protection in normal environments"
  },
  {
    title: "ISI & ISO Certified",
    description: "All our products meet and exceed Indian and international quality standards.",
    icon: <Award className="h-5 w-5 text-blue-600" />,
    detail: "Certified under IS 1786:2008 and ISO 9001:2015 quality management systems"
  },
  {
    title: "Earthquake Resistant",
    description: "Specially designed to withstand seismic activities for safer buildings.",
    icon: <CheckCircle className="h-5 w-5 text-blue-600" />,
    detail: "Complies with IS 13920 for seismic resistance with high ductility ratio"
  },
]

const productCatalog = [
  {
    id: 1,
    name: "Fe 500D TMT Bars",
    brand: "TATA Tiscon",
    sizes: ["8mm", "10mm", "12mm", "16mm", "20mm", "25mm", "32mm"],
    price: "₹70,500 per ton",
    image: "/api/placeholder/300/300", 
    rating: 4.9,
    stock: "In Stock",
    description: "Premium quality Fe 500D TMT Bars with superior strength and ductility for earthquake-resistant construction.",
    features: ["High Yield Strength", "Superior Weldability", "Better Corrosion Resistance", "Excellent Bendability"],
    bestFor: ["High-Rise Buildings", "Bridges", "Dams", "Industrial Structures"]
  },
  {
    id: 2,
    name: "Fe 550D TMT Bars",
    brand: "JSW Neosteel",
    sizes: ["10mm", "12mm", "16mm", "20mm", "25mm", "32mm"],
    price: "₹72,800 per ton",
    image: "/api/placeholder/300/300",
    rating: 4.8,
    stock: "In Stock",
    description: "High-performance Fe 550D TMT Bars for structures requiring exceptional strength and durability.",
    features: ["Higher Tensile Strength", "Better Fire Resistance", "Improved Ductility", "High Fatigue Strength"],
    bestFor: ["Skyscrapers", "Heavy Infrastructure", "Flyovers", "Earthquake-Prone Areas"]
  },
  {
    id: 3,
    name: "CRS TMT Bars",
    brand: "SAIL",
    sizes: ["8mm", "10mm", "12mm", "16mm", "20mm", "25mm"],
    price: "₹75,200 per ton",
    image: "/api/placeholder/300/300",
    rating: 4.9,
    stock: "Limited Stock",
    description: "Corrosion Resistant Steel TMT Bars designed specifically for coastal and high-humidity regions.",
    features: ["Superior Corrosion Resistance", "Extended Lifespan", "Low Maintenance", "High Strength"],
    bestFor: ["Coastal Constructions", "Chemical Plants", "Sewage Treatment Plants", "Marine Structures"]
  }
];

// AI-based chatbot responses
const chatbotResponses = {
  greetings: [
    "Hello! How can I help you with your steel requirements today?",
    "Welcome to Shri Durga Steel! I'm here to assist you with any queries.",
    "Hi there! Looking for quality TMT bars or other steel products?"
  ],
  productInfo: "We offer a wide range of TMT bars from top manufacturers like TATA Steel, JSW, and SAIL. Our products include Fe 500D, Fe 550D, and CRS TMT bars in various sizes from 8mm to 32mm. Would you like specific information about any of these products?",
  priceQuery: "Our prices are competitive and depend on the grade, size, and quantity. Fe 500D TMT bars start from ₹70,500 per ton. For a detailed quotation based on your specific requirements, I'd recommend filling out our quote request form or mentioning your requirements here.",
  deliveryInfo: "We deliver across West Bengal, typically within 24-48 hours after order confirmation for Kolkata and surrounding areas. For remote locations, it may take 2-3 days. We can provide expedited delivery for urgent requirements at a small additional cost.",
  qualityCertifications: "All our products are certified by BIS (Bureau of Indian Standards) and adhere to ISO 9001:2015 quality management systems. We only stock TMT bars from manufacturers who comply with IS 1786:2008 standards for high-strength deformed steel bars.",
  contactInfo: "You can reach our sales team at 033-XXXX-XXXX or email us at info@shridurgasteel.com. Our office is located at Industrial Area, Howrah, West Bengal. Would you like me to arrange a callback from our team?",
  calculatorHelp: "Our material calculator helps you estimate the quantity of TMT bars needed for your project. Simply enter the dimensions and specifications, and it will calculate the approximate weight and number of bars required. Would you like me to guide you through using it?"
};

const AIRecommendationEngine = ({ projectType, setRecommendedProduct }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    projectType: projectType || "residential",
    location: "",
    budget: "medium",
    floorCount: "",
    specialRequirements: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      // AI logic to determine the best product based on inputs
      let recommendedProductId = 1; // Default
      
      if (formData.projectType === "commercial" || formData.floorCount > 5) {
        recommendedProductId = 2; // Fe 550D for taller buildings
      }
      
      if (formData.location === "coastal" || formData.specialRequirements.toLowerCase().includes("corrosion")) {
        recommendedProductId = 3; // CRS for coastal areas
      }
      
      if (formData.budget === "high" && formData.projectType === "infrastructure") {
        recommendedProductId = 2; // Premium product for high-budget infrastructure
      }
      
      const product = productCatalog.find(p => p.id === recommendedProductId);
      setRecommendedProduct(product);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <BrainCircuit className="h-5 w-5 text-blue-600" />
        <h4 className="font-semibold text-blue-800">AI Product Recommendation</h4>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-blue-700 mb-1">Project Type</label>
          <select 
            name="projectType"
            value={formData.projectType}
            onChange={handleInputChange}
            className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
          >
            <option value="residential">Residential Building</option>
            <option value="commercial">Commercial Building</option>
            <option value="infrastructure">Infrastructure (Bridge/Flyover)</option>
            <option value="industrial">Industrial Structure</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm text-blue-700 mb-1">Location Type</label>
          <select 
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
          >
            <option value="">Select Location Type</option>
            <option value="urban">Urban Area</option>
            <option value="coastal">Coastal Area</option>
            <option value="seismic">Earthquake-Prone Zone</option>
            <option value="industrial">Industrial Zone</option>
          </select>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-blue-700 mb-1">Budget Level</label>
            <select 
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
            >
              <option value="low">Economy</option>
              <option value="medium">Standard</option>
              <option value="high">Premium</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm text-blue-700 mb-1">Number of Floors</label>
            <input 
              type="number"
              name="floorCount"
              value={formData.floorCount}
              onChange={handleInputChange}
              placeholder="e.g. 4"
              className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm text-blue-700 mb-1">Special Requirements</label>
          <input 
            type="text"
            name="specialRequirements"
            value={formData.specialRequirements}
            onChange={handleInputChange}
            placeholder="e.g. corrosion resistance, high load capacity"
            className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
          />
        </div>
        
        <button 
          type="submit"
          disabled={loading} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center"
        >
          {loading ? (
            <>
              <Loader className="h-4 w-4 mr-2 animate-spin" />
              Analyzing Requirements...
            </>
          ) : (
            <>
              <BrainCircuit className="h-4 w-4 mr-2" />
              Get AI Recommendation
            </>
          )}
        </button>
      </form>
    </div>
  );
};

// Material calculator component
const MaterialCalculator = () => {
  const [dimensions, setDimensions] = useState({
    length: "",
    width: "",
    depth: "",
    spacing: 150, // mm
    barSize: 12 // mm
  });
  
  const [result, setResult] = useState(null);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDimensions(prev => ({ ...prev, [name]: value }));
  };
  
  const calculateMaterial = (e) => {
    e.preventDefault();
    
    const { length, width, depth, spacing, barSize } = dimensions;
    
    // Basic calculation for reinforcement steel in a slab
    if (!length || !width) return;
    
    const lengthM = parseFloat(length);
    const widthM = parseFloat(width);
    const spacingM = spacing / 1000; // convert to meters
    
    const barDiameter = parseFloat(barSize) / 1000; // in meters
    const barArea = Math.PI * Math.pow(barDiameter / 2, 2); // in sq. meters
    
    // Calculate number of bars
    const barsAlongLength = Math.ceil(widthM / spacingM) + 1;
    const barsAlongWidth = Math.ceil(lengthM / spacingM) + 1;
    
    // Calculate total length of bars
    const totalBarLength = (barsAlongLength * lengthM) + (barsAlongWidth * widthM);
    
    // Calculate volume and weight (density of steel is about 7850 kg/m3)
    const volume = totalBarLength * barArea; // in cubic meters
    const weight = volume * 7850; // in kg
    
    setResult({
      totalBars: barsAlongLength + barsAlongWidth,
      totalLength: totalBarLength.toFixed(2),
      totalWeight: weight.toFixed(2),
      tonsNeeded: (weight / 1000).toFixed(3)
    });
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500">
      <div className="flex items-center mb-4">
        <Calculator className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-bold text-blue-800">TMT Bar Calculator</h3>
      </div>
      
      <form onSubmit={calculateMaterial} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-blue-700 text-sm mb-1">Length (meters)</label>
            <input
              type="number"
              name="length"
              value={dimensions.length}
              onChange={handleInputChange}
              required
              step="0.01"
              min="0"
              className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
          
          <div>
            <label className="block text-blue-700 text-sm mb-1">Width (meters)</label>
            <input
              type="number"
              name="width"
              value={dimensions.width}
              onChange={handleInputChange}
              required
              step="0.01"
              min="0"
              className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-blue-700 text-sm mb-1">Bar Size (mm)</label>
            <select
              name="barSize"
              value={dimensions.barSize}
              onChange={handleInputChange}
              className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="8">8 mm</option>
              <option value="10">10 mm</option>
              <option value="12">12 mm</option>
              <option value="16">16 mm</option>
              <option value="20">20 mm</option>
              <option value="25">25 mm</option>
              <option value="32">32 mm</option>
            </select>
          </div>
          
          <div>
            <label className="block text-blue-700 text-sm mb-1">Bar Spacing (mm)</label>
            <select
              name="spacing"
              value={dimensions.spacing}
              onChange={handleInputChange}
              className="w-full p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              <option value="100">100 mm</option>
              <option value="150">150 mm</option>
              <option value="200">200 mm</option>
              <option value="250">250 mm</option>
            </select>
          </div>
        </div>
        
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-lg w-full"
        >
          Calculate Materials
        </button>
      </form>
      
      {result && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-2">Results:</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-blue-700">Total Bars Needed:</p>
              <p className="font-semibold text-blue-900">{result.totalBars} bars</p>
            </div>
            <div>
              <p className="text-sm text-blue-700">Total Length:</p>
              <p className="font-semibold text-blue-900">{result.totalLength} meters</p>
            </div>
            <div>
              <p className="text-sm text-blue-700">Total Weight:</p>
              <p className="font-semibold text-blue-900">{result.totalWeight} kg</p>
            </div>
            <div>
              <p className="text-sm text-blue-700">Quantity Required:</p>
              <p className="font-semibold text-blue-900">{result.tonsNeeded} tons</p>
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center border-t border-blue-200 pt-3">
            <p className="text-sm text-blue-600">Need a quotation for this quantity?</p>
            <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded transition-all">
              Request Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// AI Chat Assistant
const ChatAssistant = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { role: 'bot', content: chatbotResponses.greetings[Math.floor(Math.random() * chatbotResponses.greetings.length)], timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMessage = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    
    // Simulate AI response processing
    setTimeout(() => {
      let response = "I'll need to check with our team on that. Would you like me to arrange a callback?";
      
      // Simple keyword-based response system
      const query = input.toLowerCase();
      
      if (query.includes('price') || query.includes('cost') || query.includes('rate')) {
        response = chatbotResponses.priceQuery;
      } else if (query.includes('delivery') || query.includes('shipping') || query.includes('transport')) {
        response = chatbotResponses.deliveryInfo;
      } else if (query.includes('quality') || query.includes('certification') || query.includes('standard')) {
        response = chatbotResponses.qualityCertifications;
      } else if (query.includes('contact') || query.includes('call') || query.includes('reach') || query.includes('phone')) {
        response = chatbotResponses.contactInfo;
      } else if (query.includes('product') || query.includes('tmt') || query.includes('steel') || query.includes('bars')) {
        response = chatbotResponses.productInfo;
      } else if (query.includes('calculator') || query.includes('calculate') || query.includes('estimate')) {
        response = chatbotResponses.calculatorHelp;
      } else if (query.includes('hello') || query.includes('hi') || query.includes('hey')) {
        response = chatbotResponses.greetings[Math.floor(Math.random() * chatbotResponses.greetings.length)];
      }
      
      const botMessage = {
        role: 'bot',
        content: response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setLoading(false);
    }, 1000);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-lg shadow-2xl flex flex-col z-50 max-h-[500px] border border-blue-200">
      <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center">
          <MessageSquare className="h-5 w-5 mr-2" />
          <h3 className="font-semibold">Steel Expert Assistant</h3>
        </div>
        <button onClick={onClose} className="text-white hover:text-blue-200 transition-colors">
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 bg-blue-50">
        {messages.map((msg, index) => (
          <div 
            key={index}
            className={`mb-3 ${msg.role === 'user' ? 'text-right' : ''}`}
          >
            <div className={`inline-block rounded-lg p-3 max-w-[80%] ${
              msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-blue-800 border border-blue-100'
            }`}>
              {msg.content}
            </div>
            <div className={`text-xs text-gray-500 mt-1 ${msg.role === 'user' ? 'text-right' : ''}`}>
              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        ))}
        {loading && (
          <div className="mb-3">
            <div className="inline-block rounded-lg p-3 bg-white text-blue-800 border border-blue-100">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-1 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-1 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSendMessage} className="p-3 border-t border-blue-100 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          className="flex-1 p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
        <button 
          type="submit"
          className="ml-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-all"
          disabled={loading}
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default function WhyChooseUs() {
  const [isMounted, setIsMounted] = useState(false)
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const [requestCallback, setRequestCallback] = useState(false)
  const [formData, setFormData] = useState({ name: "", phone: "", company: "", message: "", email: "" })
  const [formErrors, setFormErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [recommendedProduct, setRecommendedProduct] = useState(null)
  const [showProductDetail, setShowProductDetail] = useState(false)
  
  // Set up 3D model viewer - simulated with animation
  const [rotate3D, setRotate3D] = useState(false)

  useEffect(() => {
    setIsMounted(true)
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

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = "Name is required";
    
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({...prev, [name]: null}));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) return;
    
    // In a real application, you would send this data to your server
    console.log("Form submitted:", formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setRequestCallback(false)
      setFormData({ name: "", phone: "", company: "", message: "", email: "" })
    }, 3000)
  }
  
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  
  const viewProductDetail = (product) => {
    setSelectedProduct(product);
    setShowProductDetail(true);
  };

  return (
    <section 
      id="why-choose-us" 
      className={`py-20 ${darkMode 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white' 
        : 'bg-gradient-to-b from-blue-50 to-blue-100'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Dark Mode Toggle */}
        <div className="absolute top-4 right-4">
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-blue-100 text-blue-800'} transition-all`}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Why Choose Us</h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-blue-700'} max-w-2xl mx-auto`}>
            For over 18 years, we've been the trusted steel supplier for businesses across West Bengal. Here's why our customers choose Shri Durga Steel.
          </p>
        </motion.div>

        <div className={`mb-20 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} rounded-xl shadow-xl overflow-hidden border-t-4 ${darkMode ? 'border-blue-400' : 'border-blue-500'}`}>
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Premium Quality TMT Bars</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-8`}>
                  Our TMT bars are sourced directly from top manufacturers like TATA Steel, JSW, and SAIL, ensuring the highest quality for your construction projects. These bars undergo rigorous quality checks and are certified to meet all industry standards.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {productFeatures.map((feature, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start gap-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-50 hover:bg-blue-100'} p-4 rounded-lg hover:shadow-md transition-all cursor-pointer group`}
                      onClick={() => setActiveSection(index === activeSection ? null : index)}
                    >
                      <div className={`${darkMode ? 'bg-gray-600' : 'bg-blue-100'} p-2 rounded-full mt-1`}>
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-blue-700'}`}>{feature.title}</h4>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-blue-600'} text-sm`}>
                          {feature.description}
                        </p>
                        
                        {activeSection === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 pt-2 border-t border-dashed border-blue-200"
                          >
                            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-blue-500'}`}>
                              {feature.detail}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <button 
                    className={`${darkMode 
                      ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'} font-medium py-2 px-6 rounded-lg transition-all shadow-md hover:shadow-lg`}
                    onClick={() => setRequestCallback(true)}
                  >
                    Request Free Quotation
                  </button>
                  
                  <button 
                    className={`${darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white border border-blue-400' 
                      : 'bg-white hover:bg-blue-50 text-blue-600 border border-blue-500'} font-medium py-2 px-6 rounded-lg transition-all`}
                    onClick={() => setActiveSection('calculator')}
                  >
                    <Calculator className="h-4 w-4 inline-block mr-1" />
                    Material Calculator
                  </button>
                </div>
              </motion.div>
            </div>

            <div className="h-[400px] relative flex items-center justify-center overflow-hidden">
              {isMounted && (
                <>
                  <div className={`absolute inset-0 ${darkMode ? 'bg-blue-800' : 'bg-blue-600'} opacity-20 z-0 flex items-center justify-center`}>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-40 h-40 border-2 border-white border-opacity-20 rounded-full"
                        style={{
                          transform: `scale(${(i + 1) * 0.5}) rotate(${i * 5}deg)`,
                          animation: `pulse ${3 + i * 0.5}s infinite alternate ease-in-out`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="z-10 p-6 relative">
                    <div className={`flex items-center justify-center ${rotate3D ? 'animate-spin-slow' : ''}`}>
                      <img 
                        src={Sariya1} 
                        alt="Premium TMT Bars" 
                        className="rounded-lg shadow-2xl max-w-full h-auto transform hover:scale-105 transition-all duration-500" 
                      />
                    </div>
                    
                    <div className="mt-4 flex justify-center">
                      <button 
                        onClick={() => setRotate3D(!rotate3D)}
                        className={`text-xs px-3 py-1 rounded-full ${darkMode 
                          ? 'bg-gray-700 text-white hover:bg-gray-600' 
                          : 'bg-white text-blue-600 hover:bg-blue-50'} shadow-md flex items-center`}
                      >
                        <RefreshCw className={`h-3 w-3 mr-1 ${rotate3D ? 'animate-spin' : ''}`} />
                        {rotate3D ? 'Stop Rotation' : '3D View'}
                      </button>
                    </div>
                    
                    <div className={`absolute -bottom-4 -right-4 ${darkMode ? 'bg-gray-700' : 'bg-white'} p-4 rounded-lg shadow-lg`}>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className={`font-bold ${darkMode ? 'text-white' : 'text-blue-800'} mt-1`}>Top Rated Quality</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* AI Product Recommendations Section */}
        <AnimatePresence>
          {recommendedProduct && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`mb-10 ${darkMode ? 'bg-gray-800 border-blue-400' : 'bg-white border-blue-500'} rounded-xl shadow-xl overflow-hidden border-t-4 p-6`}
            >
              <div className="flex items-center mb-4">
                <BrainCircuit className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-2`} />
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-blue-800'}`}>AI Recommended Product</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div>
                  <div className={`bg-gradient-to-br ${darkMode ? 'from-gray-700 to-gray-600' : 'from-blue-100 to-blue-50'} rounded-lg p-4 flex items-center justify-center`}>
                    <img src={recommendedProduct.image} alt={recommendedProduct.name} className="max-w-full h-auto rounded shadow-md" />
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-blue-800'} mb-1`}>{recommendedProduct.name}</h4>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-blue-600'} text-sm`}>Brand: {recommendedProduct.brand}</p>
                  
                  <div className="flex items-center mt-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(recommendedProduct.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`} />
                      ))}
                    </div>
                    <span className={`ml-2 text-sm ${darkMode ? 'text-gray-400' : 'text-blue-600'}`}>{recommendedProduct.rating}/5</span>
                    <span className={`ml-4 text-xs px-2 py-0.5 rounded-full ${darkMode ? 'bg-green-800 text-green-100' : 'bg-green-100 text-green-800'}`}>
                      {recommendedProduct.stock}
                    </span>
                  </div>
                  
                  <p className={`${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-3`}>{recommendedProduct.description}</p>
                  
                  <div className="mb-4">
                    <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-blue-700'}`}>Available Sizes:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {recommendedProduct.sizes.map((size, idx) => (
                        <span key={idx} className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-blue-100 text-blue-700'}`}>
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <p className={`font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>{recommendedProduct.price}</p>
                    
                    <div className="flex gap-2">
                      <button className={`${darkMode 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'} text-sm font-medium py-1.5 px-4 rounded transition-all`}>
                        Request Quote
                      </button>
                      
                      <button 
                        onClick={() => viewProductDetail(recommendedProduct)}
                        className={`${darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-white border border-blue-400' 
                          : 'bg-white hover:bg-blue-50 text-blue-600 border border-blue-500'} text-sm font-medium py-1.5 px-4 rounded transition-all`}>
                        Product Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-dashed border-blue-200">
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-blue-600'}`}>
                  <ThumbsUp className="h-4 w-4 inline-block mr-1" />
                  Best choice for your project type and requirements. AI recommendation based on your inputs.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Features Section */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
              className={`${darkMode 
                ? 'bg-gray-800 border-blue-400' 
                : 'bg-white border-blue-500'} p-6 rounded-lg shadow-lg transition-all duration-300 flex flex-col h-full border-t-4`}
            >
              <div className={`${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-600'} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                {reason.icon}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-blue-800'}`}>{reason.title}</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-blue-600'} flex-grow`}>{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`mt-20 ${darkMode ? 'bg-gray-800 border-blue-400' : 'bg-white border-blue-500'} p-8 rounded-lg shadow-xl border-t-4 mb-20`}
        >
          <h3 className={`text-2xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-blue-800'}`}>What Our Customers Say</h3>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full px-4">
                    <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-50'} p-6 sm:p-8 rounded-lg shadow-md`}>
                      <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                        <div className={`w-16 h-16 ${darkMode ? 'bg-gray-600' : 'bg-blue-200'} rounded-full mr-4 overflow-hidden mb-2 sm:mb-0`}>
                          <img src="/api/placeholder/150/150" alt={testimonial.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-blue-800'}`}>{testimonial.name}</h4>
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-blue-600'}`}>{testimonial.position}</p>
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`} 
                              />
                            ))}
                          </div>
                        </div>
                        <div className="hidden sm:block ml-auto">
                          <span className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-600 text-white' : 'bg-blue-100 text-blue-700'}`}>
                            {testimonial.project}
                          </span>
                          <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-blue-500'}`}>{testimonial.date}</p>
                        </div>
                      </div>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-blue-700'} italic`}>
                        "{testimonial.comment}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 ${darkMode ? 'bg-gray-700' : 'bg-white'} p-2 rounded-full shadow-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:text-blue-800 transition-all`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 ${darkMode ? 'bg-gray-700' : 'bg-white'} p-2 rounded-full shadow-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:text-blue-800 transition-all`}
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonialIndex 
                      ? (darkMode ? 'bg-blue-400 w-6' : 'bg-blue-600 w-6') 
                      : (darkMode ? 'bg-gray-600' : 'bg-blue-300')
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* AI Recommender and Calculator Section */}
        <div className="mb-20">
          <h3 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-blue-800'}`}>Smart Tools & Resources</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`${darkMode ? 'bg-gray-800 border-blue-400' : 'bg-white border-blue-500'} p-8 rounded-lg shadow-lg border-t-4`}
            >
              <AIRecommendationEngine 
                projectType="residential" 
                setRecommendedProduct={setRecommendedProduct} 
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {activeSection === 'calculator' ? (
                <MaterialCalculator />
              ) : (
                <div className={`${darkMode ? 'bg-gray-800 border-blue-400' : 'bg-white border-blue-500'} p-8 rounded-lg shadow-lg border-t-4`}>
                  <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Our Quality Standards</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-100'} p-3 rounded-lg`}>
                        <Award className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      </div>
                      <div>
                        <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-blue-700'}`}>BIS Certified</h4>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-blue-600'} text-sm`}>All products meet Bureau of Indian Standards specifications</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-100'} p-3 rounded-lg`}>
                        <ShieldCheck className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      </div>
                      <div>
                        <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-blue-700'}`}>Manufacturer Certified</h4>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-blue-600'} text-sm`}>Direct supply from TATA Steel, JSW, and SAIL</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-100'} p-3 rounded-lg`}>
                        <CheckCircle className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      </div>
                      <div>
                        <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-blue-700'}`}>Quality Tested</h4>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-blue-600'} text-sm`}>Each batch undergoes rigorous testing before delivery</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 mt-4 border-t border-dashed border-blue-200">
                      <button
                        onClick={() => setActiveSection('calculator')}
                        className={`${darkMode 
                          ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                          : 'bg-blue-600 hover:bg-blue-700 text-white'} font-medium py-2 px-6 rounded-lg transition-all shadow-md hover:shadow-lg w-full flex items-center justify-center`}
                      >
                        <Calculator className="h-4 w-4 mr-2" />
                        Open Material Calculator
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${darkMode ? 'bg-gray-800 border-blue-400' : 'bg-white border-blue-500'} p-8 rounded-lg shadow-lg border-t-4`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <BarChart3 className={`h-16 w-16 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-6`} />
              <h3 className={`text-2xl font-bold mb-4 text-center ${darkMode ? 'text-white' : 'text-blue-800'}`}>Performance Metrics</h3>
              
              <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-50'} p-4 rounded-lg text-center`}>
                  <p className={`text-3xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>98%</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-blue-600'}`}>On-time Delivery</p>
                </div>
                
                <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-50'} p-4 rounded-lg text-center`}>
                  <p className={`text-3xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>100+</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-blue-600'}`}>Regular Clients</p>
                </div>
                
                <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-50'} p-4 rounded-lg text-center`}>
                  <p className={`text-3xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>4.9/5</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-blue-600'}`}>Customer Rating</p>
                </div>
                
                <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-50'} p-4 rounded-lg text-center`}>
                  <p className={`text-3xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>18+</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-blue-600'}`}>Years Experience</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className={`${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-4`}>
                  Join our satisfied customers and experience our premium quality steel products and exceptional service.
                </p>
                <button 
                  onClick={() => setRequestCallback(true)}
                  className={`${darkMode 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'} font-medium py-2 px-6 rounded-lg transition-all shadow-md hover:shadow-lg`}
                >
                  Contact Sales Team
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${darkMode ? 'bg-gray-800 border-blue-400' : 'bg-white border-blue-500'} p-8 rounded-lg shadow-lg border-t-4`}
          >
            {requestCallback ? (
              <div>
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Request a Callback</h3>
                
                {submitted ? (
                  <div className={`${darkMode ? 'bg-green-800' : 'bg-green-100'} p-4 rounded-lg mb-4`}>
                    <div className="flex items-center">
                      <CheckCircle className={`h-5 w-5 ${darkMode ? 'text-green-300' : 'text-green-600'} mr-2`} />
                      <p className={`${darkMode ? 'text-green-300' : 'text-green-700'} font-medium`}>
                        Thank you! Our team will contact you shortly.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className={`block text-sm ${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-1`}>
                        Your Name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full p-2 border ${formErrors.name ? 
                          (darkMode ? 'border-red-500 bg-red-900/20' : 'border-red-500 bg-red-50') : 
                          (darkMode ? 'border-gray-600 bg-gray-700' : 'border-blue-200')} 
                          rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
                          ${darkMode ? 'text-white' : 'text-blue-800'}`}
                        placeholder="Enter your full name"
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className={`block text-sm ${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-1`}>
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full p-2 border ${formErrors.phone ? 
                          (darkMode ? 'border-red-500 bg-red-900/20' : 'border-red-500 bg-red-50') : 
                          (darkMode ? 'border-gray-600 bg-gray-700' : 'border-blue-200')} 
                          rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
                          ${darkMode ? 'text-white' : 'text-blue-800'}`}
                        placeholder="Enter your phone number"
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className={`block text-sm ${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-1`}>
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full p-2 border ${formErrors.email ? 
                          (darkMode ? 'border-red-500 bg-red-900/20' : 'border-red-500 bg-red-50') : 
                          (darkMode ? 'border-gray-600 bg-gray-700' : 'border-blue-200')} 
                          rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
                          ${darkMode ? 'text-white' : 'text-blue-800'}`}
                        placeholder="Enter your email address"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className={`block text-sm ${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-1`}>
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={`w-full p-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-blue-200'} 
                          rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none`}
                        placeholder="Enter your company name"
                      />
                    </div>
                    
                    <div>
                      <label className={`block text-sm ${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-1`}>
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="3"
                        className={`w-full p-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-blue-200'} 
                          rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none`}
                        placeholder="Enter any specific details about your requirements"
                      ></textarea>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        className={`${darkMode 
                          ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                          : 'bg-blue-600 hover:bg-blue-700 text-white'} flex-1 font-medium py-2 px-6 rounded-lg transition-all shadow-md hover:shadow-lg`}
                      >
                        Submit Request
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setRequestCallback(false)}
                        className={`${darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600' 
                          : 'bg-white hover:bg-blue-50 text-blue-600 border border-blue-200'} flex-1 font-medium py-2 px-6 rounded-lg transition-all`}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ) : (
              <div className="h-full flex flex-col justify-center">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Get in Touch</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-6`}>
                  Need more information? Have questions about our products or services? Our team is here to help you.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-100'} p-2 rounded-full`}>
                      <MessageSquare className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    </div>
                    <div>
                      <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-blue-800'}`}>Email Us</h4>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-blue-600'}`}>info@shridurgasteel.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-100'} p-2 rounded-full`}>
                      <Search className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    </div>
                    <div>
                      <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-blue-800'}`}>Visit Our Store</h4>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-blue-600'}`}>Industrial Area, Howrah, West Bengal</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => setRequestCallback(true)}
                    className={`${darkMode 
                      ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'} flex-1 font-medium py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-lg`}
                  >
                    Request Callback
                  </button>
                  
                  <button
                    onClick={() => setChatOpen(true)}
                    className={`${darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white border border-blue-400' 
                      : 'bg-white hover:bg-blue-50 text-blue-600 border border-blue-500'} flex-1 font-medium py-2 px-4 rounded-lg transition-all flex items-center justify-center`}
                  >
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Chat with Us
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Floating Chat Button */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className={`fixed bottom-6 right-6 ${darkMode 
            ? 'bg-blue-500 hover:bg-blue-600' 
            : 'bg-blue-600 hover:bg-blue-700'} text-white p-4 rounded-full shadow-lg transition-all z-40`}
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}
      
      {/* Chat Assistant */}
      <ChatAssistant isOpen={chatOpen} onClose={() => setChatOpen(false)} />
      
      {/* Product Detail Modal */}
      <AnimatePresence>
        {showProductDetail && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowProductDetail(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-blue-800'}`}>Product Details</h3>
                <button 
                  onClick={() => setShowProductDetail(false)}
                  className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-blue-700'}`}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className={`bg-gradient-to-br ${darkMode ? 'from-gray-700 to-gray-600' : 'from-blue-100 to-blue-50'} rounded-lg p-4 flex items-center justify-center`}>
                      <img src={selectedProduct.image} alt={selectedProduct.name} className="max-w-full h-auto rounded shadow-md" />
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-5 w-5 ${i < Math.floor(selectedProduct.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`} />
                          ))}
                        </div>
                        <span className={`text-sm px-2 py-0.5 rounded-full ${darkMode ? 'bg-green-800 text-green-100' : 'bg-green-100 text-green-800'}`}>
                          {selectedProduct.stock}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-blue-800'}`}>
                      {selectedProduct.name}
                    </h2>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-blue-600'} mb-2`}>
                      Brand: <span className="font-semibold">{selectedProduct.brand}</span>
                    </p>
                    <p className={`font-bold text-lg mb-4 ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                      {selectedProduct.price}
                    </p>
                    
                    <p className={`${darkMode ? 'text-gray-300' : 'text-blue-700'} mb-6`}>
                      {selectedProduct.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className={`font-medium mb-2 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Available Sizes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.sizes.map((size, idx) => (
                          <span 
                            key={idx} 
                            className={`text-sm px-3 py-1 rounded-full ${darkMode 
                              ? 'bg-gray-700 text-white border border-gray-600'
                              : 'bg-blue-100 text-blue-700'}`}
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className={`font-medium mb-2 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Key Features:</h4>
                      <ul className={`list-disc pl-5 ${darkMode ? 'text-gray-300' : 'text-blue-700'} space-y-1`}>
                        {selectedProduct.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className={`font-medium mb-2 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Best For:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.bestFor.map((use, idx) => (
                          <span 
                            key={idx} 
                            className={`text-xs px-2 py-1 rounded ${darkMode 
                              ? 'bg-gray-700 text-blue-300 border border-blue-400'
                              : 'bg-blue-50 text-blue-600 border border-blue-200'}`}
                          >
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setRequestCallback(true);
                          setShowProductDetail(false);
                        }}
                        className={`${darkMode 
                          ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                          : 'bg-blue-600 hover:bg-blue-700 text-white'} flex-1 font-medium py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-lg`}
                      >
                        Request Quote
                      </button>
                      
                      <button
                        onClick={() => setShowProductDetail(false)}
                        className={`${darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600' 
                          : 'bg-white hover:bg-blue-50 text-blue-600 border border-blue-200'} font-medium py-2 px-4 rounded-lg transition-all`}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-blue-800'}`}>Need Help Choosing?</h4>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-blue-700'}`}>
                    Our experts can help you select the right product for your specific requirements. Contact us at 033-XXXX-XXXX or use our chat service for quick assistance.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Help Button */}
      <button
        onClick={() => setChatOpen(true)}
        className={`fixed bottom-6 left-6 ${darkMode 
          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
          : 'bg-white hover:bg-blue-50 text-blue-600 border border-blue-200'} p-3 rounded-full shadow-lg flex items-center gap-2 transition-all z-40`}
      >
        <HelpCircle className="h-5 w-5" />
        <span className="text-sm font-medium">Help</span>
      </button>
    </section>
  )
}
                