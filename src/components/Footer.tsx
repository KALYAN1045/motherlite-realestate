import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin as LinkedIn, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-playfair mb-6">Motherlite Homes</h3>
            <p className="text-gray-300 mb-6">
              Redefining luxury living with exceptional properties in the world's most prestigious locations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-gold transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-gold transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-gold transition-colors">
                <LinkedIn className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-gold transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-playfair mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-primary-gold transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-playfair mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-gold" />
                <span className="text-gray-300">+91 866543962</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-gold" />
                <span className="text-gray-300">info@motherlitehomes.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-gold" />
                <span className="text-gray-300">
                Pune Expressway, near Imagica Theme park<br />
                opp. Radisson Hotel, Khopoli, Maharashtra 410203
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-playfair mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to receive updates about new properties and exclusive offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary-gold text-white rounded-lg hover:bg-primary-gold/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Motherlite Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;