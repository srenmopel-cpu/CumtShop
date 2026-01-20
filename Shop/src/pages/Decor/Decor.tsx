import heroBackground from "@/assets/Decor/hero-background (4).jpg";
import productVase from "@/assets/Decor/product-vase.jpg";
import productWallArt from "@/assets/Decor/product-wall-art.jpg";
import productMirror from "@/assets/Decor/product-mirror (1).jpg";
import productCandle from "@/assets/Decor/product-candle.jpg";
import ProductCard from "./ProductCardDecor";
import { toast } from "sonner";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const featuredProducts = [
  {
    id: 1,
    name: "Artisan Terracotta Vase",
    price: 89.00,
    image: productVase,
    category: "Decor",
  },
  {
    id: 2,
    name: "Abstract Earth Tones Art",
    price: 145.00,
    image: productWallArt,
    category: "Decor",
  },
  {
    id: 3,
    name: "Gold Frame Round Mirror",
    price: 199.00,
    image: productMirror,
    category: "Decor",
  },
  {
    id: 4,
    name: "Luxury Scented Candle",
    price: 48.00,
    image: productCandle,
    category: "Decor",
  },
];

const Decor = () => {
  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} added to cart!`, {
      description: "Continue shopping or checkout",
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
                src={heroBackground}
                alt="Stylish modern living room with elegant home decor"
                className="h-full w-full object-cover object-center"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 hero-overlay" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex min-h-screen flex-col">
              {/* Header Spacer */}
              <div className="h-16" />

              {/* Main Content */}
              <div className="container flex flex-1 flex-col justify-center px-4 py-12 md:px-8 lg:px-16">
                {/* Hero Text */}
                <div className="mb-12 max-w-2xl animate-fade-up">
                  <span className="mb-4 inline-block font-body text-sm font-medium uppercase tracking-widest text-primary">
                    New Collection 2025
                  </span>
                  <h1 className="mb-6 font-display text-5xl font-semibold leading-tight tracking-tight text-charcoal md:text-6xl lg:text-7xl">
                    Style Your Space,
                    <br />
                    <span className="text-primary">Your Way</span>
                  </h1>
                  <p className="max-w-lg font-body text-lg text-muted-foreground">
                    Discover curated home decor that transforms any room into a sanctuary of elegance and comfort. From artisan vases to statement mirrors.
                  </p>
                </div>

                {/* Featured Products */}
                <div className="w-full">
                  <h2 className="mb-6 font-display text-2xl font-medium text-charcoal animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    Featured Pieces
                  </h2>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 lg:gap-8">
                    {featuredProducts.map((product, index) => (
                      <div
                        key={product.id}
                        className="animate-fade-up"
                        style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                      >
                        <ProductCard
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

              {/* Bottom Accent */}
              <div className="h-24 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Decor;
