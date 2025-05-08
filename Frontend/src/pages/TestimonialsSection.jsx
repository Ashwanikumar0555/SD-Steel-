"use client"
import React from "react";
import { useState, useEffect } from "react"
import { Star, Quote, Check, Send, UserPlus } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const initialTestimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "Construction Manager",
    company: "RK Builders, Kolkata",
    image: "/api/placeholder/100/100",
    rating: 5,
    quote: "We've been sourcing our TMT bars from Shri Durga Steel for over 5 years now. Their quality is consistently excellent, and their delivery is always on time. Highly recommended!",
    date: "15 April 2025"
  },
  {
    id: 2,
    name: "Amit Sharma",
    position: "Project Director",
    company: "Sharma Constructions, Durgapur",
    image: "/api/placeholder/100/100",
    rating: 4,
    quote: "The quality of steel from Shri Durga Steel is exceptional. Their TMT bars meet all the required standards, and their customer service is outstanding. They're our go-to supplier for all steel requirements.",
    date: "2 April 2025"
  },
  {
    id: 3,
    name: "Priya Patel",
    position: "Procurement Manager",
    company: "Patel Infrastructure, Howrah",
    image: "/api/placeholder/100/100",
    rating: 5,
    quote: "What sets Shri Durga Steel apart is their commitment to quality and customer satisfaction. They've never disappointed us with their products or service in the 3 years we've been working with them.",
    date: "27 March 2025"
  },
  {
    id: 4,
    name: "Sunil Mehta",
    position: "Director",
    company: "Mehta Developers, Siliguri",
    image: "/api/placeholder/100/100",
    rating: 4,
    quote: "Despite being based in Siliguri, Shri Durga Steel ensures timely delivery of our orders. Their steel quality is top-notch, and their prices are competitive. A reliable partner for all our steel needs.",
    date: "21 March 2025"
  },
]

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState(initialTestimonials)
  const [activeIndex, setActiveIndex] = useState(0)
  const [showForm, setShowForm] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [filterRating, setFilterRating] = useState(0) // 0 means show all
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    rating: 0,
    quote: ""
  })

  // Calculate stats
  const totalRating = testimonials.reduce((acc, t) => acc + t.rating, 0)
  const averageRating = (totalRating / testimonials.length).toFixed(1)
  const fiveStarCount = testimonials.filter(t => t.rating === 5).length
  const fourStarCount = testimonials.filter(t => t.rating === 4).length
  const threeStarCount = testimonials.filter(t => t.rating === 3).length
  
  // Filter testimonials
  const filteredTestimonials = filterRating > 0 
    ? testimonials.filter(t => t.rating >= filterRating)
    : testimonials

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    const currentDate = new Date()
    const dateString = currentDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    
    const newTestimonial = {
      id: testimonials.length + 1,
      ...formData,
      image: "/api/placeholder/100/100",
      date: dateString
    }
    
    setTestimonials([newTestimonial, ...testimonials])
    setShowForm(false)
    setShowToast(true)
    setFormData({
      name: "",
      position: "",
      company: "",
      rating: 0,
      quote: ""
    })
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle rating selection in form
  const handleRatingChange = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }))
  }

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4 text-blue-800">Customer Testimonials</h2>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto mb-6">
            See what our satisfied customers have to say about our products and services.
          </p>

          {/* Rating Summary */}
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto mb-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Overall Rating Circle */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full flex items-center justify-center border-8 border-blue-200 bg-gradient-to-br from-blue-500 to-blue-600">
                  <span className="text-3xl font-bold text-white">{averageRating}</span>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-2">
                  <Star className="h-5 w-5 fill-white text-white" />
                </div>
              </div>
              
              {/* Rating Breakdown */}
              <div className="flex-1">
                <p className="font-medium text-blue-800 mb-3">Based on {testimonials.length} reviews</p>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-20 text-sm text-blue-700">5 stars</span>
                    <div className="flex-1 h-3 bg-blue-100 rounded-full mx-2">
                      <div 
                        className="h-3 bg-blue-500 rounded-full" 
                        style={{ width: `${(fiveStarCount / testimonials.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-blue-700">{fiveStarCount}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="w-20 text-sm text-blue-700">4 stars</span>
                    <div className="flex-1 h-3 bg-blue-100 rounded-full mx-2">
                      <div 
                        className="h-3 bg-blue-500 rounded-full" 
                        style={{ width: `${(fourStarCount / testimonials.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-blue-700">{fourStarCount}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="w-20 text-sm text-blue-700">3 stars</span>
                    <div className="flex-1 h-3 bg-blue-100 rounded-full mx-2">
                      <div 
                        className="h-3 bg-blue-400 rounded-full" 
                        style={{ width: `${(threeStarCount / testimonials.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-blue-700">{threeStarCount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Filter and Add Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button 
              onClick={() => setFilterRating(0)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filterRating === 0 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
            >
              All Reviews
            </button>
            <button 
              onClick={() => setFilterRating(5)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filterRating === 5 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
            >
              5 Star Reviews
            </button>
            <button 
              onClick={() => setFilterRating(4)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filterRating === 4 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
            >
              4+ Star Reviews
            </button>
            <button 
              onClick={() => setFilterRating(3)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filterRating === 3 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
            >
              3+ Star Reviews
            </button>
            <button 
              onClick={() => setShowForm(true)}
              className="px-4 py-2 rounded-md bg-blue-700 text-white text-sm font-medium hover:bg-blue-800 transition-colors flex items-center gap-2"
            >
              <UserPlus className="h-4 w-4" />
              Share Your Experience
            </button>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="testimonial-swiper pb-16"
          >
            {filteredTestimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border-t-4 border-blue-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-400">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-1">
                        <Quote className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-blue-800">{testimonial.name}</h4>
                      <p className="text-blue-600 text-sm">{testimonial.position}</p>
                      <p className="text-blue-500 text-sm">{testimonial.company}</p>

                      {/* Star Rating */}
                      <div className="flex mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-2 flex-grow">
                    <p className="text-blue-700 italic">"{testimonial.quote}"</p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-blue-100 text-right">
                    <p className="text-xs text-blue-400">{testimonial.date}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 text-blue-800">Ready to experience our quality products?</h3>
          <p className="text-blue-700 mb-6">Join our growing list of satisfied customers across West Bengal.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/quote"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors shadow-md"
            >
              Request a Quote Today
            </a>
            <button
              onClick={() => setShowForm(true)}
              className="inline-block bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors shadow-md"
            >
              Share Your Experience
            </button>
          </div>
        </div>
      </div>

      {/* Submit Testimonial Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full p-6 relative animate-fadeIn">
            <button 
              onClick={() => setShowForm(false)}
              className="absolute right-4 top-4 text-blue-400 hover:text-blue-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-2xl font-bold mb-6 text-blue-800">Share Your Experience</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Your name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-blue-700 mb-1">Your Position</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Your job title"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-blue-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Your company"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">Your Rating</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => handleRatingChange(rating)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-8 w-8 transition-colors ${
                          rating <= formData.rating 
                            ? "text-yellow-400 fill-yellow-400" 
                            : "text-gray-300 hover:text-yellow-300"
                        }`}
                      />
                    </button>
                  ))}
                  {formData.rating > 0 && (
                    <span className="ml-2 text-blue-600 font-medium">
                      {formData.rating === 5 ? "Excellent!" : formData.rating === 4 ? "Very Good!" : formData.rating === 3 ? "Good" : formData.rating === 2 ? "Fair" : "Poor"}
                    </span>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="quote" className="block text-sm font-medium text-blue-700 mb-1">Your Experience</label>
                <textarea
                  id="quote"
                  name="quote"
                  value={formData.quote}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-3 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Share your experience with our products and services..."
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={formData.rating < 1}
                  className={`w-full py-3 px-6 rounded-md font-medium text-white flex items-center justify-center gap-2 
                    ${formData.rating < 1 
                      ? 'bg-gray-300 cursor-not-allowed' 
                      : formData.rating >= 3 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-blue-600 hover:bg-blue-700'} 
                    transition-colors shadow-md`}
                >
                  <Send className="h-5 w-5" />
                  Submit Your Testimonial
                </button>
                <p className="text-center text-sm text-blue-500 mt-3">
                  Only testimonials with 3+ star ratings will be displayed publicly
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-md shadow-lg flex items-center gap-3 animate-slideIn z-50">
          <Check className="h-5 w-5" />
          <span>Thank you! Your testimonial has been submitted successfully.</span>
        </div>
      )}

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
        
        .swiper-pagination-bullet-active {
          background-color: #3b82f6 !important;
        }
      `}</style>
    </section>
  )
}