"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { title: "Domov", href: "/" },
  { title: "Storitve", href: "#storitve" },
  { title: "Projekti", href: "#projekti" },
  { title: "O Nas", href: "#o-nas" },
  { title: "Kontakt", href: "#kontakt" },
];

interface NavbarProps {
  companyName: string;
}

export const Navbar = ({ companyName }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="text-2xl font-bold bg-primary-500 text-white w-10 h-10 
                         rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 5 }}
            >
              SM
            </motion.div>
            <span className="text-xl font-semibold text-gray-900">
              {companyName}
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} title={item.title} />
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 bg-primary-500 text-white rounded-lg 
                        shadow-[0_4px_8px_rgba(0,0,0,0.1)] 
                        hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] 
                        transition-shadow duration-300 
                        transform hover:-translate-y-0.5"
            >
              Brezplačna Ponudba
            </motion.button>
          </div>

          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link
      href={href}
      className="group relative px-4 py-2 text-gray-800 hover:text-primary-600 transition-colors"
    >
      <span className="relative z-10">{title}</span>
      <motion.div
        className="absolute inset-0 bg-gray-100 rounded-lg -z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      />
    </Link>
  );
};
