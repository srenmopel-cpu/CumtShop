import { Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import ProductCard from "./ProductCardFresh";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import organicStrawberries from "@/assets/FreshFood/Organic Strawberries.jpg";
import freshSalmon from "@/assets/FreshFood/Fresh Atlantic Salmon.jpg";
import avocado from "@/assets/FreshFood/Avocado.jpg";
import ribeye from "@/assets/FreshFood/Premium Ribeye Steak.jpg";
import heroBg from "@/assets/FreshFood/hero-banner.jpg";

export const products = [
  {
    id: 1,
    image: organicStrawberries,
    name: "Organic Strawberries",
    price: 4.99,
    category: "Fresh Food",
    unit: "basket",
  },
  {
    id: 2,
    image: freshSalmon,
    name: "Fresh Atlantic Salmon",
    price: 12.99,
    category: "Fresh Food",
    unit: "lb",
  },
  {
    id: 3,
    image: avocado,
    name: "Ripe Avocados",
    price: 2.49,
    category: "Fresh Food",
    unit: "each",
  },
  {
    id: 4,
    image: ribeye,
    name: "Premium Ribeye Steak",
    price: 18.99,
    category: "Fresh Food",
    unit: "lb",
  },
];

const FreshFood = () => {
  console.log("FreshFood component executed");
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const HeroBanner = () => {
    console.log("HeroBanner rendering");
    return (
      <section className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Fresh produce background"
            className="h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          {/* Hero Text */}
          <div className="text-center mb-12 md:mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Leaf className="h-5 w-5 text-primary-foreground" />
              <span className="text-primary-foreground text-sm font-medium">
                100% Fresh & Organic
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 text-balance">
              Fresh from Nature
              <br />
              <span className="text-fresh-orange-light">to Your Home!</span>
            </h1>

            <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Discover the finest selection of farm-fresh produce, premium meats,
              and sustainable seafood delivered straight to your doorstep.
            </p>

            <button className="btn-secondary text-lg px-8 py-4" onClick={() => navigate('/cart')}>
              Shop Now
            </button>
          </div>

          {/* Featured Products */}
          <div className="mt-8">
            <h2 className="text-center font-display text-2xl md:text-3xl font-semibold text-primary-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Featured Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  unit={product.unit}
                  onAddToCart={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex gap-6">
        <Sidebar />
        <div className="flex-1">
          <HeroBanner />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FreshFood;

