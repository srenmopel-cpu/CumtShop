import { toast } from "sonner";
import ProductCard from "./ProductCard";
import heroBathroom from "@/assets/Bathroom/hero-bathroom.jpg";
import productTowels from "@/assets/Bathroom/product-towels.jpg";
import productDispenser from "@/assets/Bathroom/product-dispenser.jpg";
import productMirror from "@/assets/Bathroom/product-mirror.jpg";
import productMat from "@/assets/Bathroom/product-mat.jpg";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const featuredProducts = [
  {
    id: 1,
    name: "Premium Egyptian Cotton Towel Set",
    price: 49.99,
    originalPrice: 69.99,
    image: productTowels,
    category: "Bathroom",
  },
  {
    id: 2,
    name: "Ceramic Soap Dispenser Set",
    price: 29.99,
    image: productDispenser,
    category: "Bathroom",
  },
  {
    id: 3,
    name: "LED Backlit Round Mirror",
    price: 189.99,
    originalPrice: 249.99,
    image: productMirror,
    category: "Bathroom",
  },
  {
    id: 4,
    name: "Memory Foam Bath Mat",
    price: 34.99,
    image: productMat,
    category: "Bathroom",
  },
];

const Bathroom = () => {
  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} added to cart!`, {
      description: "Continue shopping or proceed to checkout.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex gap-6 flex-1">
        <Sidebar />
        <div className="flex-1">
          <section className="relative min-h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={heroBathroom}
                alt="Modern spa-inspired bathroom"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/80 via-hero-overlay/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-hero-overlay/60 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24 min-h-screen flex flex-col justify-center">
              {/* Hero Text */}
              <div className="max-w-2xl mb-12 lg:mb-16 animate-fade-up">
                <span className="inline-block text-primary-foreground/80 text-sm font-medium tracking-wider uppercase mb-4 px-3 py-1 rounded-full bg-hero-text/10 backdrop-blur-sm">
                  Transform Your Space
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-hero-text leading-tight mb-6">
                  Refresh Your
                  <span className="block bg-gradient-to-r from-hero-text via-primary-foreground/90 to-accent bg-clip-text text-transparent">
                    Bathroom Space
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-hero-text/80 max-w-lg leading-relaxed">
                  Discover our curated collection of premium bathroom essentials.
                  Elevate your daily routine with spa-quality products.
                </p>
              </div>

              {/* Featured Products Grid */}
              <div className="animate-fade-up-delay">
                <h2 className="text-hero-text text-lg font-medium mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-hero-text/40" />
                  Featured Products
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-5xl">
                  {featuredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      image={product.image}
                      name={product.name}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      onAddToCart={() => handleAddToCart(product.name)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bathroom;
