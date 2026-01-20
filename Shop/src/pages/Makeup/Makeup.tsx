import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCardMakeup from "./ProductCardMakeup";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import heroBackground from "@/assets/Makeup/hero-makeup-bg.jpg";
import { toast } from "sonner";

export const featuredProducts = [
  {
    id: 1,
    name: "Velvet Matte Lipstick",
    price: 32.00,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop&q=80",
    category: "Makeup",
  },
  {
    id: 2,
    name: "Radiant Glow Foundation",
    price: 48.00,
    image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop&q=80",
    category: "Makeup",
  },
  {
    id: 3,
    name: "Nude Rose Eyeshadow Palette",
    price: 58.00,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop&q=80",
    category: "Makeup",
  },
  {
    id: 4,
    name: "Silk Blush Duo",
    price: 36.00,
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=400&h=400&fit=crop&q=80",
    category: "Makeup",
  },
];

const Makeup = () => {
  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} added to cart!`, {
      description: "View your cart to checkout",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex gap-6 flex-1">
        <Sidebar />
        <div className="flex-1">
          <section className="relative min-h-screen overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src={heroBackground}
                alt="Luxury makeup products"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-overlay" />
              <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-12 sm:px-6 lg:px-8">
              {/* Header/Brand */}
              <header className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-8 w-8 text-gold animate-glow" />
                  <span className="font-display text-2xl font-semibold text-foreground">
                    Luxe Beauty
                  </span>
                </div>

              </header>

              {/* Hero Content */}
              <div className="flex flex-1 flex-col items-center justify-center text-center">
                <div className="max-w-4xl space-y-6" style={{ animationDelay: "0.1s" }}>
                  {/* Tagline */}
                  <p className="animate-fade-up font-body text-sm font-medium uppercase tracking-[0.3em] text-rose-gold">
                    Premium Makeup Collection
                  </p>

                  {/* Main Headline */}
                  <h1 className="animate-fade-up font-display text-5xl font-bold leading-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl" style={{ animationDelay: "0.2s" }}>
                    Unleash Your{" "}
                    <span className="bg-gradient-glamour bg-clip-text text-transparent">
                      Beauty
                    </span>
                  </h1>

                  {/* Subheadline */}
                  <p className="animate-fade-up mx-auto max-w-xl font-body text-lg text-muted-foreground sm:text-xl" style={{ animationDelay: "0.3s" }}>
                    Discover luxurious formulas crafted for flawless looks.
                    From bold lips to radiant skin, find your perfect match.
                  </p>

                  {/* CTA Buttons */}
                  <div className="animate-fade-up flex flex-wrap items-center justify-center gap-4 pt-4" style={{ animationDelay: "0.4s" }}>
                    <Button variant="default" size="lg" className="group">
                      Shop Collection
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground/10">
                      View Lookbook
                    </Button>
                  </div>
                </div>
              </div>

              {/* Featured Products Section */}
              <div className="pb-8">
                <div className="mb-8 text-center">
                  <h2 className="animate-fade-up font-display text-2xl font-semibold text-foreground sm:text-3xl" style={{ animationDelay: "0.5s" }}>
                    Featured Products
                  </h2>
                  <p className="animate-fade-up mt-2 font-body text-muted-foreground" style={{ animationDelay: "0.6s" }}>
                    Curated bestsellers loved by makeup enthusiasts
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                  {featuredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-scale-in"
                      style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                    >
                      <ProductCardMakeup
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        onAddToCart={() => handleAddToCart(product.name)}
                      />
                    </div>
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

export default Makeup;
