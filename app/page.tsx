import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import { NewHero } from "@/components/NewHero";

export default function Home() {
  return (
    <>
      <Hero />
      <NewHero />
      {/* <Camp /> */}
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
