import { useState } from "react";
import { toast } from "sonner";
import ProductCardFrozen from "./ProductCardFrozen";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import heroBg from "@/assets/Frozen/hero-bg.jpg";
import strawberryIcecream from "@/assets/Frozen/product-strawberry-icecream.png";
import bluePopsicle from "@/assets/Frozen/product-blue-popsicle.png";
import mintFroyo from "@/assets/Frozen/product-mint-froyo.png";
import fruitSmoothie from "@/assets/Frozen/product-fruit-smoothie.png";

export const featuredProducts = [
  {
    id: 1,
    name: "Strawberry Bliss Cone",
    price: 5.99,
    image: strawberryIcecream,
    category: "Frozen",
  },
  {
    id: 2,
    name: "Blue Raspberry Pop",
    price: 3.49,
    image: bluePopsicle,
    category: "Frozen",
  },
  {
    id: 3,
    name: "Mint Chocolate Froyo",
    price: 6.49,
    image: mintFroyo,
    category: "Frozen",
  },
  {
    id: 4,
    name: "Tropical Fruit Smoothie",
    price: 7.99,
    image: fruitSmoothie,
    category: "Frozen",
  },
];

const Frozen = () => {
  const [currentProduct, setCurrentProduct] = useState<{ id: number, name: string, price: number, image: string } | null>(null);

  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} added to cart!`, {
      description: "View your cart to checkout",
    });
  };

  const handleGridMouseMove = (event: React.MouseEvent) => {
    const element = document.elementFromPoint(event.clientX, event.clientY);
    const cardElement = element?.closest('[data-product-id]');
    if (cardElement) {
      const productId = parseInt(cardElement.getAttribute('data-product-id') || '0');
      const product = featuredProducts.find(p => p.id === productId);
      setCurrentProduct(product || null);
    } else {
      setCurrentProduct(null);
    }
  };

  const handleGridClick = () => {
    if (currentProduct) {
      handleAddToCart(currentProduct.name);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex gap-6 flex-1">
        <Sidebar />
        <div className="flex-1">
          <section className="relative min-h-screen w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src={heroBg}
                alt="Frozen treats background"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-ice-blue-dark/60 via-ice-blue/40 to-deep-freeze/80" />

              {/* Frost overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-frost/20 to-transparent" />

              {/* Animated frost particles */}
              <div className="absolute top-20 left-10 w-4 h-4 bg-white/60 rounded-full blur-sm animate-float" />
              <div className="absolute top-40 right-20 w-6 h-6 bg-white/40 rounded-full blur-md animate-float-delayed" />
              <div className="absolute bottom-60 left-1/4 w-3 h-3 bg-white/50 rounded-full blur-sm animate-float" />
              <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-pastel-pink/40 rounded-full blur-md animate-float-delayed" />
              <div className="absolute bottom-40 right-1/4 w-4 h-4 bg-mint/50 rounded-full blur-sm animate-float" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 flex flex-col items-center min-h-screen">
              {/* Headline Section */}
              <div className="text-center mb-12 md:mb-16 pt-8 md:pt-12">
                {/* Decorative element */}
                <div className="inline-block mb-6">
                  <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-body text-sm font-medium">
                    <span className="w-2 h-2 bg-mint rounded-full animate-pulse" />
                    Fresh & Frozen Daily
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-frost-shadow leading-tight mb-6">
                  Cool Treats for
                  <br />
                  <span className="bg-gradient-to-r from-pastel-pink via-white to-mint bg-clip-text text-transparent">
                    Hot Moments!
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="font-body text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                  Discover our handcrafted frozen delights made with premium ingredients.
                  From creamy ice creams to refreshing smoothies.
                </p>
              </div>

              {/* Featured Products Grid */}
              <div className="w-full max-w-5xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <h2 className="mb-6 text-center text-2xl font-bold text-primary-foreground drop-shadow-md">
                  Featured Products
                </h2>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4" onMouseMove={handleGridMouseMove} onClick={handleGridClick}>
                  {featuredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      data-product-id={product.id}
                      className="animate-scale-in"
                      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                    >
                      <ProductCardFrozen
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        onAddToCart={() => handleAddToCart(product.name)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-12 md:mt-16 text-center">
                <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-body font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <span>Explore All Products</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Frozen;
