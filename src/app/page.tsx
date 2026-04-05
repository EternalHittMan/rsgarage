import HeroSection from "@/components/HeroSection";
import PowerCalculator from "@/components/PowerCalculator";
import RecentProjects from "@/components/RecentProjects";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PowerCalculator />
      <RecentProjects />
      <ServicesSection />
      <StatsSection />
      <ChatbotWidget />
    </>
  );
}
