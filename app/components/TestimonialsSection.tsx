"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Marko Novak",
    role: "Lastnik Hiše",
    image: "/images/testimonial-1.jpg",
    content:
      "Izjemno profesionalna ekipa. Delo je bilo opravljeno hitro in kvalitetno. Priporočam!",
    rating: 5,
  },
  {
    name: "Ana Kovač",
    role: "Upravnica Stavbe",
    image: "/images/testimonial-2.jpg",
    content:
      "Odlična komunikacija in svetovanje. Streha je prekrasna in popolnoma vodotesna.",
    rating: 5,
  },
  {
    name: "Janez Horvat",
    role: "Poslovni Objekt",
    image: "/images/testimonial-3.jpg",
    content:
      "Zanesljivi in natančni. Projekt je bil končan pred rokom in v okviru proračuna.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Kaj Pravijo Naše Stranke</h2>
          <p className="text-xl text-gray-600">
            Več kot 1000 zadovoljnih strank nam zaupa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
