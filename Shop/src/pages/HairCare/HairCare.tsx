import heroBackground from "@/assets/HairCare/hero-background (2).jpg";
import productShampoo from "@/assets/HairCare/product-shampoo.png";
import productConditioner from "@/assets/HairCare/product-conditioner.png";
import productSerum from "@/assets/HairCare/product-serum (1).png";
import productMask from "@/assets/HairCare/product-mask.png";
import ProductCardCare from "./ProductCardCare";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

export const featuredProducts = [
  {
    id: 1,
    name: "Nourishing Shampoo",
    price: 34.99,
    image: productShampoo,
    category: "Hair Care",
  },
  {
    id: 2,
    name: "Silk Conditioner",
    price: 32.99,
    image: productConditioner,
    category: "Hair Care",
  },
  {
    id: 3,
    name: "Repair Hair Serum",
    price: 48.99,
    image: productSerum,
    category: "Hair Care",
  },
  {
    id: 4,
    name: "Deep Hydration Mask",
    price: 42.99,
    image: productMask,
    category: "Hair Care",
  },
];

const HairCare = () => {
  const handleAddToCart = (productId: number) => {
    toast.success(`Product added to cart!`, {
      description: "View your cart to checkout",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex gap-6 flex-1">
        <Sidebar />
        <div className="flex-1">
          <section className="relative min-h-screen">
            {/* Hero Background */}
            <div className="absolute inset-0 z-0">
              <img
                src={heroBackground}
                alt="Luxurious hair care products"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 hero-overlay" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
              {/* Headline Section */}
              <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
                <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wider uppercase bg-cream/90 text-charcoal rounded-full animate-fade-in">
                  Premium Hair Care Collection
                </span>
                <h1
                  className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-cream leading-tight mb-6 animate-fade-in-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  Love Your Hair,
                  <br />
                  <span className="text-sage">Every Day</span>
                </h1>
                <p
                  className="text-lg sm:text-xl text-cream/90 max-w-xl mx-auto mb-8 animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  Discover salon-quality products that transform your hair with natural, nourishing ingredients.
                </p>
                <div
                  className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <Button variant="default" size="lg">
                    Shop Collection
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Featured Products */}
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <h2 className="text-center text-cream font-display text-2xl sm:text-3xl font-medium mb-8">
                  Featured Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredProducts.map((product) => (
                    <ProductCardCare
                      key={product.id}
                      image={product.image}
                      name={product.name}
                      price={product.price}
                      onAddToCart={() => handleAddToCart(product.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HairCare;
