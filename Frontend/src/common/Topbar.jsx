import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, ChevronDown } from "lucide-react";

export default function Topbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "py-1 bg-zinc-900/95 backdrop-blur-sm"
            : "py-3 bg-gradient-to-r from-zinc-900 via-slate-800 to-zinc-900"
        } text-white px-4 md:px-8 shadow-lg fixed top-0 z-50`}
      >
        {/* Top contact info bar */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-6 text-xs md:text-sm">
            <div className="flex items-center gap-1 hover:text-amber-400 transition-colors group">
              <div className="bg-zinc-800 group-hover:bg-amber-500 p-1.5 rounded-full transition-colors">
                <Phone className="h-3 w-3 text-zinc-300 group-hover:text-zinc-900" />
              </div>
              <a href="tel:+919053719053" className="transition-colors">
                +91 90537 19053
              </a>
            </div>

            <div className="flex items-center gap-1 hover:text-amber-400 transition-colors group">
              <div className="bg-zinc-800 group-hover:bg-amber-500 p-1.5 rounded-full transition-colors">
                <Mail className="h-3 w-3 text-zinc-300 group-hover:text-zinc-900" />
              </div>
              <a href="mailto:info@shridurgasteel.in" className="transition-colors">
                info@shridurgasteel.in
              </a>
            </div>

            <div className="flex items-center gap-1 hover:text-amber-400 transition-colors group">
              <div className="bg-zinc-800 group-hover:bg-amber-500 p-1.5 rounded-full transition-colors">
                <Clock className="h-3 w-3 text-zinc-300 group-hover:text-zinc-900" />
              </div>
              <span>Mon-Sat: 9AM - 6PM</span>
            </div>

            <div className="hidden lg:flex items-center gap-1 hover:text-amber-400 transition-colors group">
              <div className="bg-zinc-800 group-hover:bg-amber-500 p-1.5 rounded-full transition-colors">
                <MapPin className="h-3 w-3 text-zinc-300 group-hover:text-zinc-900" />
              </div>
              <span>123 Steel Market Road, Kolkata, West Bengal</span>
            </div>
          </div>

          <div className="flex gap-4 mt-2 md:mt-0 items-center">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919053719053"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-green-600 hover:bg-green-700 px-2 py-1 rounded text-xs transition-colors"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.21 22.5 1.5 17.79 1.5 12S6.21 1.5 12 1.5 22.5 6.21 22.5 12 17.79 22.5 12 22.5z"></path>
              </svg>
              <span>Chat</span>
            </a>

            {/* Social Media Icons */}
            <div className="flex gap-3 items-center">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-amber-400 transition-colors hover:scale-110 transform-gpu"
              >
                {/* IG Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-amber-400 transition-colors hover:scale-110 transform-gpu"
              >
                {/* LinkedIn Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-amber-400 transition-colors hover:scale-110 transform-gpu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>

              {/* Mobile Chevron */}
              <div
                className="relative md:hidden cursor-pointer ml-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="text-zinc-400 hover:text-amber-400 flex items-center">
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMenuOpen ? "rotate-180" : ""}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile location dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-800 text-white text-xs px-4 py-2 mt-[72px] shadow-md transition-all">
          <div className="flex items-center gap-1 text-amber-400">
            <MapPin className="h-4 w-4" />
            <span>123 Steel Market Road, Kolkata, West Bengal</span>
          </div>
        </div>
      )}
    </>
  );
}
