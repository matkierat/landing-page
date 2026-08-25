import Hero from "@/components/sections/Hero";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Benefits from "@/components/sections/Benefits";
import SocialProof from "@/components/sections/SocialProof";
import AboutMe from "@/components/sections/AboutMe";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <Benefits />
      <SocialProof />
      <AboutMe />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
