import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="text-2xl font-semibold mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            © 2024 Your Company
          </motion.div>
          <div className="flex space-x-4">
            {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="hover:text-gray-300 text-xl transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <motion.a
            href="#"
            className="hover:text-gray-300 transition-colors duration-300"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaFacebookF size={24} />
          </motion.a>
          <motion.a
            href="#"
            className="hover:text-gray-300 transition-colors duration-300"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaTwitter size={24} />
          </motion.a>
          <motion.a
            href="#"
            className="hover:text-gray-300 transition-colors duration-300"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaInstagram size={24} />
          </motion.a>
          <motion.a
            href="#"
            className="hover:text-gray-300 transition-colors duration-300"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaLinkedinIn size={24} />
          </motion.a>
          <motion.a
            href="#"
            className="hover:text-gray-300 transition-colors duration-300"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
          >
            <FaYoutube size={24} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
