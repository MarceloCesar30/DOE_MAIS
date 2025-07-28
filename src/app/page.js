
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import StatsSection from "./components/StatsSection.jsx";
import FunctionalitySection from "./components/FunctionalitySection.jsx";
import Footer from "./components/Footer.jsx";
import ResponsibilitySection from "./components/ResponsabilitySection.jsx";
import PainSection from "./components/PainSection.jsx";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <PainSection />
      <StatsSection />
      <FunctionalitySection />
      <ResponsibilitySection />
      <Footer />
    </div>
  );
}
