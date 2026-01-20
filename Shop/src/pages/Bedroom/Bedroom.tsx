import ProductCard from "./ProductCardBedroom";
import bedroomHero from "@/assets/Bedroom/bedroom-hero.jpg";
import productMattress from "@/assets/Bedroom/product-mattress.jpg";
import productPillows from "@/assets/Bedroom/product-pillows.jpg";
import productBlanket from "@/assets/Bedroom/product-blanket.jpg";
import productLamp from "@/assets/Bedroom/product-lamp.jpg";
import { toast } from "sonner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const featuredProducts = [
  {
    id: 1,
    name: "Luxury Cloud Mattress",
    price: 899.00,
    image: productMattress,
  },
  {
    id: 2,
    name: "Premium Pillow Set",
    price: 129.00,
    image: productPillows,
  },
  {
    id: 3,
    name: "Cozy Knit Throw",
    price: 89.00,
    image: productBlanket,
  },
  {
    id: 4,
    name: "Nordic Bedside Lamp",
    price: 149.00,
    image: productLamp,
  },
];

const Bedroom = () => {
  console.log("bedroomHero:", bedroomHero);
  console.log("featuredProducts:", featuredProducts.map(p => ({ ...p, image: p.image })));

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
            <div className="absolute inset-0 z-0">
              <img
                src={bedroomHero}
                alt="Cozy bedroom interior"
                className="w-full h-full object-cover"
                onError={() => console.log('Hero image failed to load:', bedroomHero)}
              />
              {/* Warm gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/40 to-foreground/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
              {/* Headline Section */}
              <div className="text-center mb-12 lg:mb-16 pt-8 lg:pt-16">
                <h1
                  className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground mb-4 leading-tight"
                >
                  Create Your Perfect
                  <br />
                  <span className="italic">Sleep Space</span>
                </h1>

                <p
                  className="font-sans text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto"
                >
                  Discover luxurious bedding essentials designed for comfort,
                  quality, and peaceful nights.
                </p>
              </div>

              {/* Featured Products Grid */}
              <div className="max-w-6xl mx-auto">
                <h2 className="font-serif text-2xl md:text-3xl text-foreground text-center mb-8">
                  Featured Products
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredProducts.map((product, index) => (
                    <div key={product.id}>
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
    </div >
  );
};

export default Bedroom;
