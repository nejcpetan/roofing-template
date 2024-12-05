"use client";

import { motion } from "framer-motion";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Telefon",
    content: "+386 1 234 5678",
    href: "tel:+38612345678",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    content: "info@stresnemojs.si",
    href: "mailto:info@stresnemojs.si",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Lokacija",
    content: "Ljubljanska cesta 123, 1000 Ljubljana",
    href: "https://maps.google.com/?q=Ljubljana",
  },
];

export const ContactSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kontaktirajte Nas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stopite v stik z nami za brezplačen ogled in svetovanje
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Ime in Priimek
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 
                             focus:ring-primary-500 focus:border-primary-500 outline-none 
                             transition-all"
                    placeholder="Janez Novak"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 
                             focus:ring-primary-500 focus:border-primary-500 outline-none 
                             transition-all"
                    placeholder="+386 XX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 
                           focus:ring-primary-500 focus:border-primary-500 outline-none 
                           transition-all"
                  placeholder="janez@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Sporočilo
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 
                           focus:ring-primary-500 focus:border-primary-500 outline-none 
                           transition-all resize-none"
                  placeholder="Opišite vaš projekt..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary-600 text-white rounded-lg font-semibold
                         hover:bg-primary-700 transition-colors"
              >
                Pošlji Povpraševanje
              </motion.button>
            </form>
          </motion.div>

          {/* Map and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg"
                >
                  <div className="p-3 bg-primary-50 text-primary-600 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map */}
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44167.43044152515!2d14.478859274716915!3d46.05677711754149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476531f5969886d1%3A0x400f81c823fec20!2sLjubljana%2C%20Slovenia!5e0!3m2!1sen!2s!4v1709913439705!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
