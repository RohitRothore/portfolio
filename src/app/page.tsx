"use client"

import { motion } from "framer-motion";
import HeroSection from "@/components/homePage/HeroSection";
import MyExperience from "@/components/homePage/MyExperience";
import Features from "@/components/homePage/features/Features";
import Portfolio from "@/components/homePage/portfolio/Portfolio";
import Contact from "@/components/homePage/contact/Contact";
import Resume from "@/components/homePage/resume/Resume";
import Footer from "@/components/Footer";
import HireMeStickyCard from "@/components/HireMeStickyCard";
import Widget from "@/components/Widget";

export default function Home() {
  const sectionAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="bg-gradient-to-l from-slate-200 to to-slate-100">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        variants={sectionAnimation}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        variants={sectionAnimation}
      >
        <MyExperience />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        variants={sectionAnimation}
      >
        <Features />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        variants={sectionAnimation}
      >
        <Resume />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7}}
        variants={sectionAnimation}
      >
        <Portfolio />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        variants={sectionAnimation}
      >
        <Contact />
      </motion.div>

      <Footer />
      <HireMeStickyCard />
      <Widget />
    </main>
  );
}