// /src/app/page.tsx

"use client";

import { Box } from "@chakra-ui/react"; 
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutPageSection from "../components/AboutPageSection"; 
import WorksSection from "../components/WorksSection";
import AboutMeSection from "../components/AboutMeSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box>
      <Header />
      <HeroSection />
      <AboutPageSection />
      <AboutMeSection />
      <WorksSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}
