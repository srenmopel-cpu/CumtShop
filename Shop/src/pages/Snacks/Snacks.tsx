import { useState } from "react";
import { toast } from "sonner";
import ProductCardSnacks from "./ProductCardSnacks";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import heroBg from "@/assets/Snacks/product-Snacks-chocolate (5).jpg";
import productChips from "/Coca.jpg";
import productCookies from "@/assets/Snacks/product-Snacks-chocolate (2).jpg";
import productPopcorn from "@/assets/Snacks/product-Snacks-chocolate (3).jpg";
import productChocolate from "@/assets/Snacks/product-Snacks-chocolate (4).jpg";

export const featuredProducts = [
  {
    id: 1,
    name: "Crunchy Salted Chips",
    price: 4.99,
    originalPrice: 5.99,
    image: productChips,
    category: "Snacks",
    isOnSale: true,
  },
  {
    id: 2,
    name: "Chocolate Chip Cookies",
    price: 6.49,
    originalPrice: 7.99,
    image: productCookies,
    category: "Snacks",
    isOnSale: true,
  },
  {
    id: 3,
    name: "Classic Buttered Popcorn",
    price: 3.99,
    image: productPopcorn,
    category: "Snacks",
    isOnSale: false,
  },
  {
    id: 4,
    name: "Hazelnut Chocolate Bar",
    price: 7.99,
    image: productChocolate,
    category: "Snacks",
    isOnSale: false,
  },
];

const Snacks = () => {
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
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={heroBg}
                alt="Delicious snacks background"
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
                  Crunchy Snacks for
                  <br />
                  <span className="text-secondary">Every Craving!</span>
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90 drop-shadow-md sm:text-xl">
                  Discover our handpicked selection of premium snacks.
                  From savory to sweet, we've got something for everyone.
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
                      <ProductCardSnacks
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        isOnSale={product.isOnSale}
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

export default Snacks;
