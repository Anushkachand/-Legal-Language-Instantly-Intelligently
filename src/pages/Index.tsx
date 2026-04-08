import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClauseSimplifier from "@/components/ClauseSimplifier";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ClauseSimplifier />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
