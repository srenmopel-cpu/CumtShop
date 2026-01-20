import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";
import SpecialOffer from "@/components/SpecialOffer";
import BrandSection from "@/components/BrandSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <HeroBanner />
        <div className="flex gap-6 mt-8">
          <Sidebar />
          <div className="flex-1">
            <ProductGrid />
            <SpecialOffer />
            <BrandSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
