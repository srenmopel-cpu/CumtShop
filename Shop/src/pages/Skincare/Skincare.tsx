import ProductCard from "./ProductCardSkincare";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBackground from "@/assets/Skincare/hero-background (1).jpg";
import cleanser from "@/assets/Skincare/product-cleanser.png";
import serum from "@/assets/Skincare/product-serum.png";
import cream from "@/assets/Skincare/product-cream.png";
import sunscreen from "@/assets/Skincare/product-sunscreen.png";
import productsData from "@/data/products.json";

const imageMap = {
  4: cream,
  8: serum,
  12: cleanser,
};

export const allProducts = productsData
  .filter(product => product.category === "Health & Beauty")
  .map(product => ({
    ...product,
    image: imageMap[product.id as keyof typeof imageMap] || product.image,
  }));

const Skincare = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex gap-6 flex-1">
        <Sidebar />
        <div className="flex-1">
          <section className="relative min-h-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={heroBackground}
                alt="Luxury skincare products"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
              {/* Hero Text Section */}
              <div className="text-center mb-16 lg:mb-20 animate-fade-in">
                {/* Frosted Glass Container */}
                <div className="glass-card inline-block px-8 py-12 md:px-16 md:py-16 rounded-3xl max-w-3xl mx-auto">
                  <span className="inline-block text-primary font-medium text-sm tracking-[0.3em] uppercase mb-4">
                    Premium Health & Beauty
                  </span>
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
                    Glow Naturally.
                    <br />
                    <span className="text-primary">Care Beautifully.</span>
                  </h1>
                  <p className="font-sans text-muted-foreground text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                    Discover our collection of luxurious, clean skincare essentials crafted for radiant, healthy skin.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <button className="btn-primary px-8 py-3.5 rounded-full font-medium text-base">
                      Shop Collection
                    </button>
                    <button className="px-8 py-3.5 rounded-full font-medium text-base border-2 border-foreground/20 text-foreground hover:border-primary hover:text-primary transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Featured Products Section */}
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                    Featured Products
                  </h2>
                  <div className="w-20 h-0.5 bg-primary mx-auto mt-4" />
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
                  {allProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${(index + 1) * 150}ms` }}
                    >
                      <ProductCard
                        image={product.image}
                        name={product.name}
                        price={`$${product.price.toFixed(2)}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-sage-light/30 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-40 right-10 w-40 h-40 bg-blush/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skincare;
