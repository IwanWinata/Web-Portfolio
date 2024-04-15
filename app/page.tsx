import Image from "next/image";
import { motion } from "framer-motion";

// Components Initialize
import IntroSection from "@/components/introSection";
import SectionDivider from "@/components/sectionDivider";
import AboutSection from "@/components/aboutSection";
import ProjectsSection from "@/components/projectsSection";
import ContactSection from "@/components/contactSection";

export default function Home() {
  return (
    <main className="">
      <div className="container mx-auto px-12 py-4 flex flex-col items-center">
        <IntroSection />
        <SectionDivider />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
