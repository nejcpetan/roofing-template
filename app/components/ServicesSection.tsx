"use client";

import { motion } from "framer-motion";
import React from "react";
import { Shield, Home, Factory, Drill, Droplets, Sun } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: <Home className="w-8 h-8" />,
    title: "Stanovanjske Strehe",
    description: "Vrhunske strešne rešitve za vaš dom z dolgoletno garancijo",
    image: "/images/residential-service.jpg",
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Industrijske Strehe",
    description: "Specializirani za velike industrijske in poslovne objekte",
    image: "/images/industrial-service.jpg",
  },
  {
    icon: <Drill className="w-8 h-8" />,
    title: "Vzdrževanje",
    description: "Redni pregledi in vzdrževanje za dolgotrajno zaščito",
    image: "/images/maintenance-service.jpg",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Zaščita",
    description: "Napredni materiali za maksimalno zaščito vaše strehe",
    image: "/images/protection-service.jpg",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Hidroizolacija",
    description: "Celovita zaščita pred vodo in vlago",
    image: "/images/hydro-service.jpg",
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Sončne Strehe",
    description: "Integracija sončnih panelov v strešne sisteme",
    image: "/images/solar-service.jpg",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Naše Storitve</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Zagotavljamo celovite strešne rešitve za vse vrste objektov
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8">
                <div className="text-primary-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
