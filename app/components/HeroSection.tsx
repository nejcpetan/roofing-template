"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import React from "react";
import Image from "next/image";
import { Shield, Award, Clock, Drill } from "lucide-react";

const trustIndicators = [
  {
    icon: <Shield className="w-6 h-6" />,
    text: "15 Let Garancije",
  },
  {
    icon: <Award className="w-6 h-6" />,
    text: "Certificirani Strokovnjaki",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    text: "Hitra Izvedba",
  },
  {
    icon: <Drill className="w-6 h-6" />,
    text: "Vrhunski Materiali",
  },
];

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="min-h-screen relative bg-gray-50">
      {/* Main Hero Content */}
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-primary-500/10 px-4 py-2 rounded-full"
              >
                <span className="text-primary-600 font-semibold">
                  #1 Strešni Mojstri v Sloveniji
                </span>
              </motion.div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Vaša Streha,
              <br />
              <span className="text-primary-600">Naša Odgovornost</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-xl">
              Združujemo tradicionalno obrtništvo s sodobno tehnologijo za
              dolgotrajne strešne rešitve, ki ščitijo vaš dom in družino.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-primary-600 text-white rounded-lg 
                          font-semibold shadow-lg shadow-primary-500/30
                          hover:bg-primary-700 transition-all"
              >
                Brezplačen Ogled
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 
                          rounded-lg font-semibold hover:bg-gray-900 
                          hover:text-white transition-all"
              >
                Naše Storitve
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative grid grid-cols-2 gap-4 h-[600px]"
          >
            <div className="space-y-4">
              <div className="relative h-[280px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-1.jpg"
                  alt="Professional roofing work"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative h-[280px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-2.jpg"
                  alt="Quality roofing materials"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative h-full">
              <div className="relative h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-3.jpg"
                  alt="Completed roofing project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-white p-6 rounded-xl
                         shadow-lg shadow-gray-100/50"
            >
              <div className="p-3 bg-primary-500/10 rounded-lg text-primary-600">
                {indicator.icon}
              </div>
              <span className="font-semibold text-gray-900">
                {indicator.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100 
                     rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gray-100 
                     rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"
        />
      </div>
    </div>
  );
};
