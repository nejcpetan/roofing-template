import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ServicesSection } from "./components/ServicesSection";
import { TrustSection } from "./components/TrustSection";
import React from "react";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TrustSection />
    </main>
  );
}
