
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import StatsSection from "./components/StatsSection.jsx";
import FunctionalitySection from "./components/FunctionalitySection.jsx";
import Footer from "./components/Footer.jsx";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <StatsSection />
      <FunctionalitySection/>
      <Footer/>
    </div>
  );
}
