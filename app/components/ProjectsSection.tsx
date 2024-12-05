"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import React from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Sodobno Stanovanjsko",
    category: "Strehe",
    year: "2024",
    number: "01/03",
    description: "Sodobne strešne rešitve za moderne domove",
    image: "/images/residential-roof.jpg",
  },
  {
    id: 2,
    title: "Poslovni Kompleks",
    category: "Industrijsko",
    year: "2023",
    number: "02/03",
    description: "Obsežni projekti streh za poslovne objekte",
    image: "/images/commercial-roof.jpg",
  },
  {
    id: 3,
    title: "Obnova Dediščine",
    category: "Restavriranje",
    year: "2023",
    number: "03/03",
    description: "Ohranjanje zgodovinske arhitekture s sodobnimi tehnikami",
    image: "/images/heritage-roof.jpg",
  },
];

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleTransform = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div ref={containerRef} className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="mb-40"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <span className="text-sm text-gray-500">{project.year}</span>
                <h2 className="text-4xl md:text-6xl font-bold">
                  {project.title}
                </h2>
                <p className="text-xl text-gray-600">{project.description}</p>
                <span className="text-sm text-gray-500">{project.number}</span>
              </div>
              <div className="h-[400px] relative overflow-hidden rounded-xl">
                <motion.div
                  style={{ scale: scaleTransform }}
                  className="relative h-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
