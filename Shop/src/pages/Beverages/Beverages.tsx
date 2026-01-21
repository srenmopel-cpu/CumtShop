import { useState } from "react";
import { toast } from "sonner";
import ProductCardBeverages from "./ProductCardBeverages";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useCart } from "@/contexts/CartContext";
import heroBackground from "@/assets/Beverages/heroBeverages-background.jpg";
import icedLatte from "@/assets/Beverages/productBeverages-iced-latte.png";
import mangoSmoothie1 from "@/assets/Beverages/productBeverages-mango-smoothie (1).png";
import bubbleTea from "@/assets/Beverages/productBeverages-bubble-tea.png";
import mangoSmoothie2 from "@/assets/Beverages/productBeverages-mango-smoothie (2).png";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

export const featuredProducts: Product[] = [
  { id: 1, name: "Caramel Iced Latte", price: 5.99, image: icedLatte, category: "Beverages" },
  { id: 2, name: "Tropical Mango Smoothie", price: 6.49, image: mangoSmoothie1, category: "Beverages" },
  { id: 3, name: "Classic Bubble Tea", price: 4.99, image: bubbleTea, category: "Beverages" },
  { id: 4, name: "Berry Mango Smoothie", price: 6.49, image: mangoSmoothie2, category: "Beverages" },
];

const Beverages = () => {
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast.success(`${product.name} added to cart!`, {
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
      handleAddToCart(currentProduct);
    }
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
                alt="Refreshing beverages"
                className="h-full w-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16">
              {/* Headline */}
              <div className="mb-12 text-center animate-fade-up">
                <h1 className="mb-4 text-4xl font-extrabold leading-tight text-primary-foreground drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
                  Refreshing Beverages
                  <br />
                  <span className="text-secondary">Refresh Your Day!</span>
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90 drop-shadow-md sm:text-xl">
                  Indulge in our refreshing selection of specialty beverages
                </p>
              </div>

              {/* Featured Products Grid */}
              <div className="w-full max-w-5xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <h2 className="mb-6 text-center text-2xl font-bold text-primary-foreground drop-shadow-md">
                  Featured Products
                </h2>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8" onMouseMove={handleGridMouseMove} onClick={handleGridClick}>
                  {featuredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      data-product-id={product.id}
                      className="flex-shrink-0 w-1/2 md:w-1/4 max-w-sm animate-scale-in"
                      style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                    >
                      <ProductCardBeverages
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        onAddToCart={() => handleAddToCart(product)}
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

export default Beverages;
