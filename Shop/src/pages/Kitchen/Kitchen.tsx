import { toast } from "sonner";
import heroImage from "@/assets/Kitchen/hero-kitchen.jpg";
import productPan from "@/assets/Kitchen/product-pan.jpg";
import productKnife from "@/assets/Kitchen/product-knife.jpg";
import productKettle from "@/assets/Kitchen/product-kettle.jpg";
import productCuttingBoard from "@/assets/Kitchen/product-cutting-board.jpg";
import ProductCard from "./ProductCard";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const featuredProducts = [
  {
    id: 1,
    name: "Premium Copper Frying Pan",
    price: 89.99,
    image: productPan,
    category: "Kitchen",
  },
  {
    id: 2,
    name: "Professional Chef's Knife",
    price: 129.99,
    image: productKnife,
    category: "Kitchen",
  },
  {
    id: 3,
    name: "Artisan Pour-Over Kettle",
    price: 74.99,
    image: productKettle,
    category: "Kitchen",
  },
  {
    id: 4,
    name: "Organic Wood Cutting Board",
    price: 54.99,
    image: productCuttingBoard,
    category: "Kitchen",
  },
];

const Kitchen = () => {
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
          <section className="relative min-h-screen">
            {/* Hero Background */}
            <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
              <img
                src={heroImage}
                alt="Modern kitchen with premium cookware"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-hero-overlay" />

              {/* Hero Content */}
              <div className="relative z-10 h-full flex items-center justify-center px-4">
                <div className="text-center max-w-4xl mx-auto animate-fade-up">
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight drop-shadow-lg">
                    Everything You Need for a Smarter Kitchen
                  </h1>
                  <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto drop-shadow-md">
                    Discover premium cookware, tools, and appliances designed for the modern home chef
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Products Section */}
            <div className="relative bg-background py-12 md:py-16">
              <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2">
                    Featured Products
                  </h2>
                  <p className="text-muted-foreground">
                    Handpicked essentials for your culinary adventures
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  {featuredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      style={{ animationDelay: `${index * 100}ms` }}
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
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Kitchen;
