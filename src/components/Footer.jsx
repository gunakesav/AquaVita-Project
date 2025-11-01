import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white via-blue-50/50 to-blue-100/30 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#0077be] mb-4">AquaVita</h3>
            <p className="text-gray-600 mb-4">Pure Water, Pure Life</p>
            <p className="text-sm text-gray-500">
              Advanced water purification solutions for your home and business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#0077be] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#0077be] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-[#0077be] transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/project" className="text-gray-600 hover:text-[#0077be] transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/knowledge" className="text-gray-600 hover:text-[#0077be] transition">
                  Knowledge
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[#0077be] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#0077be] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-[#0077be] mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <Mail className="mr-2" size={18} />
                <a href="mailto:gunakesav.s@gmail.com" className="hover:text-[#0077be] transition">
                  gunakesav.s@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="mr-2" size={18} />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start text-gray-600">
                <MapPin className="mr-2 mt-1" size={18} />
                <span>Your Address Here</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} AquaVita. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
