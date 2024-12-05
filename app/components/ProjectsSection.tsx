"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import React from "react";
import Image from "next/image";
import { ArrowRight, Clock, Home, Users } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Vila Moderna",
    category: "Stanovanjska Streha",
    description: "Sodobna streha z integrirano sončno elektrarno",
    image: "/images/project-1.jpg",
    stats: {
      duration: "3 tedni",
      size: "280m²",
      team: "4 strokovnjaki",
    },
    year: "2024",
  },
  {
    id: 2,
    title: "Poslovna Stavba Steklarna",
    category: "Poslovna Streha",
    description: "Energetsko učinkovita ravna streha s posebno izolacijo",
    image: "/images/project-2.jpg",
    stats: {
      duration: "6 tednov",
      size: "800m²",
      team: "8 strokovnjakov",
    },
    year: "2023",
  },
  {
    id: 3,
    title: "Dvorec Klasika",
    category: "Zgodovinska Prenova",
    description: "Obnova zgodovinske strehe z originalnimi materiali",
    image: "/images/project-3.jpg",
    stats: {
      duration: "2 meseca",
      size: "450m²",
      team: "6 strokovnjakov",
    },
    year: "2023",
  },
];

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Naši Projekti</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Odkrijte naše najnovejše projekte, kjer združujemo inovativnost,
            kakovost in estetiko
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div
                  className={`space-y-8 ${
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-4">
                    <span className="text-primary-600 font-semibold">
                      {project.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold">
                      {project.title}
                    </h3>
                    <p className="text-xl text-gray-600">
                      {project.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Clock className="w-6 h-6 text-primary-600" />
                      <p className="font-semibold">{project.stats.duration}</p>
                      <p className="text-sm text-gray-500">Čas izvedbe</p>
                    </div>
                    <div className="space-y-2">
                      <Home className="w-6 h-6 text-primary-600" />
                      <p className="font-semibold">{project.stats.size}</p>
                      <p className="text-sm text-gray-500">Površina</p>
                    </div>
                    <div className="space-y-2">
                      <Users className="w-6 h-6 text-primary-600" />
                      <p className="font-semibold">{project.stats.team}</p>
                      <p className="text-sm text-gray-500">Ekipa</p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-2 text-primary-600 font-semibold"
                  >
                    Več o projektu
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                <div
                  className={`relative h-[600px] ${
                    index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative h-full rounded-2xl overflow-hidden"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-8">
                      <p className="text-white font-semibold">{project.year}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
