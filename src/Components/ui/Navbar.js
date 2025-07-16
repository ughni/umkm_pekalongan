"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaPhone, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../public/Images/Logo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu", href: "/menu" },
    { name: "Cerita Kami", href: "/tentang" },
    { name: "Lokasi", href: "/lokasi" },
    { name: "Kontak", href: "/kontak" },
    { name: "Admin", href: "/Admin" },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 shadow-md py-2" : "bg-white/80 py-3"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo dengan ukuran lebih besar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }} 
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <Image 
                src={logo} 
                alt="UMKM Makanan Khas" 
                width={150}  // Diperbesar dari 48
                height={150} // Diperbesar dari 48
                className="rounded-full object-contain"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {navLinks.map((link, index) => (
                <motion.div 
                  key={link.name} 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link 
                    href={link.href} 
                    className="relative px-3 py-2 text-gray-700 hover:text-amber-800 transition-colors duration-300 font-medium text-sm group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Kontak CTA */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 0.7 }} 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="flex items-center gap-4"
            >
              <a 
                href="tel:+6285869090748" 
                className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors"
              >
                <FaPhone className="text-lg" />
                <span className="hidden lg:inline">0858-6909-0748</span>
              </a>
              
              <Link
                href="/pesan-online"
                className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-amber-800/20"
              >
                <FaShoppingCart />
                <span>Pesan Online</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden" 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
          >
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="p-2 rounded-md text-gray-600 hover:text-amber-800 hover:bg-amber-50 focus:outline-none transition-colors"
              aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: "auto" }} 
            exit={{ opacity: 0, height: 0 }} 
            transition={{ duration: 0.3 }} 
            className="md:hidden overflow-hidden bg-white shadow-xl"
          >
            <motion.div 
              variants={mobileMenuVariants} 
              initial="hidden" 
              animate="visible" 
              className="px-4 pt-2 pb-6 space-y-2"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={navItemVariants}>
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-800 rounded-lg transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={navItemVariants} className="pt-4 border-t border-gray-100">
                <a
                  href="tel:+6285869090748"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-amber-50 rounded-lg"
                >
                  <FaPhone className="text-amber-600" />
                  <span>0858-6909-0748</span>
                </a>
              </motion.div>

              <motion.div variants={navItemVariants} className="pt-2">
                <Link
                  href="/pesan-online"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold px-5 py-3 rounded-lg text-sm hover:from-amber-700 hover:to-amber-800 transition-all shadow"
                >
                  <FaShoppingCart />
                  <span>Pesan Online</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}