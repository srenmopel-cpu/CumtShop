import ProductCardPersonal from "./ProductCardPersonal";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import heroBackground from "@/assets/PersonalCare/hero-background (3).jpg";
import lotion from "@/assets/PersonalCare/product-lotion.jpg";
import bodywash from "@/assets/PersonalCare/product-bodywash.jpg";
import soap from "@/assets/PersonalCare/product-soap.jpg";
import productsData from "@/data/products.json";
import { toast } from "sonner";

const imageMap = {
  4: lotion,
  8: bodywash,
  12: soap,
};

export const allProducts = productsData
  .filter(product => product.category === "Health & Beauty")
  .map(product => ({
    ...product,
    image: imageMap[product.id as keyof typeof imageMap] || product.image,
  }));

const PersonalCare = () => {
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
          <section className="relative min-h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={heroBackground}
                alt="Personal care products"
                className="h-full w-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32">
              {/* Headline */}
              <div className="text-center mb-12 md:mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-headline">
                  Everyday Care for a Healthier You
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-sm">
                  Discover our collection of premium personal care essentials for the whole family
                </p>
              </div>

              {/* Featured Products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {allProducts.map((product) => (
                  <ProductCardPersonal
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    onAddToCart={() => handleAddToCart(product.name)}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PersonalCare;
