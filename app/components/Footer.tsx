"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

interface FooterProps {
  companyName: string;
}

export const Footer = ({ companyName }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div
                className="text-2xl font-bold bg-primary-500 text-white w-10 h-10 
                            rounded-lg flex items-center justify-center"
              >
                SM
              </div>
              <h3 className="text-2xl font-bold text-white">{companyName}</h3>
            </div>
            <p className="text-gray-400">
              Profesionalne strešne storitve z več kot 15-letnimi izkušnjami.
              Zaupanje, kakovost in zadovoljstvo strank so naše vodilo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Hitre Povezave
            </h4>
            <ul className="space-y-3">
              {["Domov", "Storitve", "Projekti", "O Nas", "Kontakt"].map(
                (item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5 }}
                    className="hover:text-primary-400 cursor-pointer"
                  >
                    {item}
                  </motion.li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span>Ljubljanska cesta 123, 1000 Ljubljana</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span>+386 1 234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span>info@stresneresitve.si</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Sledite Nam
            </h4>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -5 }}
                  className="bg-gray-800 p-3 rounded-full hover:bg-primary-500 
                           transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© 2024 {companyName}. Vse pravice pridržane.</p>
        </div>
      </div>
    </footer>
  );
};
