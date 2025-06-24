// /src/app/page.tsx

"use client";

import { Box } from "@chakra-ui/react"; 
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutPageSection from "../components/AboutPageSection"; 
import ProjectsList from "../components/ProjectsList";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box>
      <Header />
      <HeroSection />
      <AboutPageSection />
      <ProjectsList />
      <AboutSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}
