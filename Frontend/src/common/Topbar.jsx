import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, ExternalLink, X, MessageSquare } from "lucide-react";

export default function Topbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { type: "bot", text: "Hello! 👋 I'm your virtual assistant. How can I help you with steel products today?" }
  ]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to bottom of chat whenever messages update
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const contactItems = [
    {
      icon: <Phone className="h-3 w-3 text-blue-600 group-hover:text-white" />,
      text: "+91 90537 19053",
      link: "tel:+919053719053",
      showOnMobile: true
    },
    {
      icon: <Mail className="h-3 w-3 text-blue-600 group-hover:text-white" />,
      text: "info@shridurgasteel.in",
      link: "mailto:info@shridurgasteel.in",
      showOnMobile: true
    },
    {
      icon: <Clock className="h-3 w-3 text-blue-600 group-hover:text-white" />,
      text: "Mon-Sat: 9AM - 6PM",
      link: null,
      showOnMobile: false
    },
    {
      icon: <MapPin className="h-3 w-3 text-blue-600 group-hover:text-white" />,
      text: "123 Steel Market Road, Kolkata",
      link: "https://maps.google.com/?q=123+Steel+Market+Road+Kolkata+West+Bengal",
      showOnMobile: false
    }
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.21 22.5 1.5 17.79 1.5 12S6.21 1.5 12 1.5 22.5 6.21 22.5 12 17.79 22.5 12 22.5z"></path>
        </svg>
      ),
      url: "https://wa.me/919053719053",
      isButton: true
    },
    {
      name: "Instagram",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
        </svg>
      ),
      url: "https://instagram.com",
      isButton: false
    },
    {
      name: "LinkedIn",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />  
        </svg>
      ),
      url: "https://linkedin.com",
      isButton: false
    },
    {
      name: "Facebook",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
        </svg>
      ),
      url: "https://facebook.com",
      isButton: false
    }
  ];

  const topbarHeight = isScrolled ? '60px' : '76px';

  const handleSendMessage = () => {
    if (chatMessage.trim() === "") return;
    
    // Add user message to chat
    setChatHistory([...chatHistory, { type: "user", text: chatMessage }]);
    
    // Simulate bot response (in a real app, you'd connect to an API)
    setTimeout(() => {
      let botResponse = "Thank you for your message! One of our representatives will get back to you shortly.";
      
      // Simple keyword detection for demo purposes
      const lowerMessage = chatMessage.toLowerCase();
      if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("rate")) {
        botResponse = "Our steel prices vary based on grade, thickness, and quantity. Please provide more details about your requirements, and I'll help you get a quote.";
      } else if (lowerMessage.includes("delivery") || lowerMessage.includes("shipping")) {
        botResponse = "We offer delivery across India. Shipping costs and times depend on your location. For large orders, we provide free delivery within a 50km radius of Kolkata.";
      } else if (lowerMessage.includes("product") || lowerMessage.includes("steel type") || lowerMessage.includes("catalog")) {
        botResponse = "We offer a wide range of steel products including TMT bars, pipes, angles, channels, and sheets. Would you like information about a specific product?";
      }
      
      setChatHistory(prevChat => [...prevChat, { type: "bot", text: botResponse }]);
    }, 1000);
    
    // Clear input
    setChatMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? "py-2 bg-white shadow-md" 
            : "py-3 bg-gradient-to-r from-blue-50 to-blue-100"
        } text-gray-800 px-4 md:px-8 fixed top-0 z-50 border-b ${isScrolled ? 'border-gray-200' : 'border-blue-200'}`}
        style={{ height: topbarHeight }}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center h-full">
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-5 text-xs md:text-sm">
            {contactItems.map((item, index) => (
              item.showOnMobile || window.innerWidth >= 768 ? (
                <div key={index} className="flex items-center gap-1.5 hover:text-blue-700 transition-colors group">
                  <div className="bg-blue-100 group-hover:bg-blue-600 p-1.5 rounded-full transition-colors">
                    {item.icon}
                  </div>
                  {item.link ? (
                    <a href={item.link} className="transition-colors font-medium" target={item.link.startsWith('http') ? "_blank" : ""} rel="noopener noreferrer">
                      {item.text}
                    </a>
                  ) : (
                    <span className="font-medium">{item.text}</span>
                  )}
                </div>
              ) : null
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-1 md:mt-0 items-center">
            {/* WhatsApp Button */}
            <a
              href={socialLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors shadow-md hover:shadow-lg"
            >
              {socialLinks[0].icon}
              <span>Chat Now</span>
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>

            {/* Chat Bot Button */}
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors shadow-md hover:shadow-lg"
            >
              <MessageSquare className="h-3 w-3" />
              <span>AI Assistant</span>
            </button>

            {/* Social Media Icons */}
            <div className="flex gap-4 items-center">
              {socialLinks.slice(1).map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 hover:text-blue-600 transition-colors hover:scale-110 transform-gpu duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Contact Info Dropdown */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden bg-blue-50 text-gray-800 fixed top-0 left-0 right-0 px-4 py-3 shadow-md z-40 transition-all duration-300 border-b border-blue-200"
          style={{ 
            top: topbarHeight,
            opacity: isMobileMenuOpen ? 1 : 0,
            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)'
          }}
        >
          {contactItems.filter(item => !item.showOnMobile).map((item, index) => (
            <div key={index} className="mb-3">
              {item.link ? (
                <a 
                  href={item.link}
                  target={item.link.startsWith('http') ? "_blank" : ""}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium"
                >
                  <div className="bg-blue-100 p-1.5 rounded-full">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                  {item.link.startsWith('http') && <ExternalLink className="h-3 w-3 ml-1" />}
                </a>
              ) : (
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="bg-blue-100 p-1.5 rounded-full">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Chat Bot Interface */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col overflow-hidden border border-blue-200">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              <h3 className="font-medium">Steel Products Assistant</h3>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-blue-100 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-96 bg-gray-50">
            {chatHistory.map((message, index) => (
              <div 
                key={index} 
                className={`mb-3 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.type === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-white text-gray-800 border border-blue-200 rounded-bl-none shadow-sm'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <div className="border-t border-gray-200 p-3 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

//////////////////////


// import React, { useState, useEffect, useRef } from "react";
// import { Phone, Mail, MapPin, Clock, ChevronDown, ExternalLink } from "lucide-react";

// export default function Topbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isLocationOpen, setIsLocationOpen] = useState(false);
//   const locationRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
    
//     window.addEventListener("scroll", handleScroll, { passive: true });
    
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close location dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (locationRef.current && !locationRef.current.contains(event.target)) {
//         setIsLocationOpen(false);
//       }
//     }
    
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const contactItems = [
//     {
//       icon: <Phone className="h-3 w-3 text-blue-600 group-hover:text-white" />,
//       text: "+91 90537 19053",
//       link: "tel:+919053719053",
//       showOnMobile: true
//     },
//     {
//       icon: <Mail className="h-3 w-3 text-blue-600 group-hover:text-white" />,
//       text: "info@shridurgasteel.in",
//       link: "mailto:info@shridurgasteel.in",
//       showOnMobile: true
//     },
//     {
//       icon: <Clock className="h-3 w-3 text-blue-600 group-hover:text-white" />,
//       text: "Mon-Sat: 9AM - 6PM",
//       link: null,
//       showOnMobile: false
//     },
//     {
//       icon: <MapPin className="h-3 w-3 text-blue-600 group-hover:text-white" />,
//       text: "123 Steel Market Road, Kolkata, West Bengal",
//       link: "https://maps.google.com/?q=123+Steel+Market+Road+Kolkata+West+Bengal",
//       showOnMobile: false
//     }
//   ];

//   const socialLinks = [
//     {
//       name: "WhatsApp",
//       icon: (
//         <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
//           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
//           <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.21 22.5 1.5 17.79 1.5 12S6.21 1.5 12 1.5 22.5 6.21 22.5 12 17.79 22.5 12 22.5z"></path>
//         </svg>
//       ),
//       url: "https://wa.me/919053719053",
//       isButton: true
//     },
//     {
//       name: "Instagram",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
//           <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
//         </svg>
//       ),
//       url: "https://instagram.com",
//       isButton: false
//     },
//     {
//       name: "LinkedIn",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
//           <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />  
//         </svg>
//       ),
//       url: "https://linkedin.com",
//       isButton: false
//     },
//     {
//       name: "Facebook",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
//           <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
//         </svg>
//       ),
//       url: "https://facebook.com",
//       isButton: false
//     }
//   ];

//   const topbarHeight = isScrolled ? '60px' : '76px';

//   return (
//     <>
//       <div 
//         className={`w-full transition-all duration-300 ${
//           isScrolled 
//             ? "py-2 bg-white shadow-md" 
//             : "py-3 bg-gradient-to-r from-blue-100 to-blue-50"
//         } text-gray-800 px-4 md:px-8 fixed top-0 z-50 border-b ${isScrolled ? 'border-gray-200' : 'border-blue-200'}`}
//         style={{ height: topbarHeight }}
//       >
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center h-full">
//           {/* Contact Info */}
//           <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-5 text-xs md:text-sm">
//             {contactItems.map((item, index) => (
//               item.showOnMobile || window.innerWidth >= 768 ? (
//                 <div key={index} className="flex items-center gap-1.5 hover:text-blue-700 transition-colors group">
//                   <div className="bg-blue-100 group-hover:bg-blue-600 p-1.5 rounded-full transition-colors">
//                     {item.icon}
//                   </div>
//                   {item.link ? (
//                     <a href={item.link} className="transition-colors font-medium" target={item.link.startsWith('http') ? "_blank" : ""} rel="noopener noreferrer">
//                       {item.text}
//                     </a>
//                   ) : (
//                     <span className="font-medium">{item.text}</span>
//                   )}
//                 </div>
//               ) : null
//             ))}
//           </div>

//           {/* Social Links */}
//           <div className="flex gap-4 mt-1 md:mt-0 items-center">
//             {/* WhatsApp Button */}
//             <a
//               href={socialLinks[0].url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors shadow-md hover:shadow-lg"
//             >
//               {socialLinks[0].icon}
//               <span>Chat Now</span>
//               <ExternalLink className="h-3 w-3 ml-1" />
//             </a>

//             {/* Social Media Icons */}
//             <div className="flex gap-4 items-center">
//               {socialLinks.slice(1).map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-800 hover:text-blue-600 transition-colors hover:scale-110 transform-gpu duration-200"
//                   aria-label={social.name}
//                 >
//                   {social.icon}
//                 </a>
//               ))}

//               {/* Mobile Location Dropdown */}
//               <div
//                 ref={locationRef}
//                 className="relative md:hidden cursor-pointer ml-2 bg-blue-100 hover:bg-blue-200 p-1.5 rounded-full transition-colors"
//                 onClick={() => setIsLocationOpen(!isLocationOpen)}
//               >
//                 <div className="text-blue-600 flex items-center">
//                   <ChevronDown 
//                     className={`h-4 w-4 transition-transform duration-300 ${isLocationOpen ? "rotate-180" : ""}`} 
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile location dropdown */}
//       {isLocationOpen && (
//         <div 
//           className="md:hidden bg-blue-50 text-gray-800 text-xs fixed top-0 left-0 right-0 px-4 py-3 shadow-md z-40 transition-all duration-300 border-b border-blue-200"
//           style={{ 
//             top: topbarHeight,
//             opacity: isLocationOpen ? 1 : 0,
//             transform: isLocationOpen ? 'translateY(0)' : 'translateY(-10px)'
//           }}
//         >
//           <a 
//             href="https://maps.google.com/?q=123+Steel+Market+Road+Kolkata+West+Bengal"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium"
//           >
//             <div className="bg-blue-100 p-1.5 rounded-full">
//               <MapPin className="h-3 w-3 text-blue-600" />
//             </div>
//             <span>123 Steel Market Road, Kolkata, West Bengal</span>
//             <ExternalLink className="h-3 w-3 ml-1" />
//           </a>
//           <div className="mt-3 flex items-center gap-2 text-gray-700">
//             <div className="bg-blue-100 p-1.5 rounded-full">
//               <Clock className="h-3 w-3 text-blue-600" />
//             </div>
//             <span className="font-medium">Mon-Sat: 9AM - 6PM</span>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

