"use client";

import { motion } from "framer-motion";
import React from "react";

const stats = [
  {
    number: "15+",
    label: "Let Izkušenj",
  },
  {
    number: "1000+",
    label: "Zadovoljnih Strank",
  },
  {
    number: "100%",
    label: "Garancija",
  },
  {
    number: "24/7",
    label: "Podpora",
  },
];

export const TrustSection = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Zakaj Nam Zaupati?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Naša predanost kakovosti in zadovoljstvu strank nas uvršča med
            vodilne ponudnike strešnih storitev
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold mb-2 text-primary-400">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
