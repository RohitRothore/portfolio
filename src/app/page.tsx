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
  return (
    <main className="bg-gradient-to-l from-slate-200 to to-slate-100">
      <HeroSection />
      <MyExperience />
      <Features />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
      <HireMeStickyCard />
      <Widget />
    </main>
  );
}
