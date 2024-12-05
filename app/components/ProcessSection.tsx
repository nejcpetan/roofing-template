"use client";

import { motion } from "framer-motion";
import { PhoneCall, ClipboardCheck, Drill, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <PhoneCall className="w-8 h-8" />,
    title: "1. Brezplačen Posvet",
    description: "Pokličite nas za začetni pogovor o vaših potrebah in željah.",
  },
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "2. Ogled in Ponudba",
    description: "Brezplačen ogled lokacije in priprava detajlne ponudbe.",
  },
  {
    icon: <Drill className="w-8 h-8" />,
    title: "3. Izvedba Del",
    description: "Strokovna izvedba s certificiranimi materiali.",
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "4. Končni Pregled",
    description: "Temeljit pregled in predaja garancije.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Kako Poteka Delo</h2>
          <p className="text-xl text-gray-600">
            Enostaven in transparenten proces
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-6 inline-block p-4 bg-primary-50 rounded-full text-primary-600">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
