import Hero from "@/components/Hero";
import DescriptionSection from "@/components/DescriptionSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-cream">
      <Hero />
      <DescriptionSection />
    </main>
  );
}
