import HeroSection from "@/components/homePage/HeroSection";
import MyExperience from "@/components/homePage/MyExperience";

export default function Home() {
  return (
    <main className="bg-gradient-to-l from-slate-200 to to-slate-100">
      <HeroSection />
      <MyExperience />
    </main>
  );
}
