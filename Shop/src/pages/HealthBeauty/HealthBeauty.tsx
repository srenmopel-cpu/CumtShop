import ProductCardHealthBeauty from "./ProductCardHealthBeauty";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBackground from "@/assets/Skincare/hero-background (1).jpg";
import cleanser from "@/assets/Skincare/product-cleanser.png";
import serum from "@/assets/Skincare/product-serum.png";
import cream from "@/assets/Skincare/product-cream.png";
import sunscreen from "@/assets/Skincare/product-sunscreen.png";
import lotion from "@/assets/PersonalCare/product-lotion.jpg";
import bodywash from "@/assets/PersonalCare/product-bodywash.jpg";
import soap from "@/assets/PersonalCare/product-soap.jpg";
import toothpaste from "@/assets/PersonalCare/product-toothpaste.jpg";
import productShampoo from "@/assets/HairCare/product-shampoo.png";
import productConditioner from "@/assets/HairCare/product-conditioner.png";
import productHairSerum from "@/assets/HairCare/product-serum (1).png";
import productMask from "@/assets/HairCare/product-mask.png";
import productsData from "@/data/products.json";

// Skincare products from products.json
const skincareImageMap = {
    4: cream,
    8: serum,
    12: cleanser,
};

const skincareProducts = productsData
    .filter(product => product.category === "Health & Beauty")
    .map(product => ({
        ...product,
        image: skincareImageMap[product.id as keyof typeof skincareImageMap] || product.image,
        subcategory: "Skincare"
    }));

// Personal Care products (using same base but different images)
const personalCareImageMap = {
    4: lotion,
    8: bodywash,
    12: soap,
};

const personalCareProducts = productsData
    .filter(product => product.category === "Health & Beauty")
    .map(product => ({
        ...product,
        id: product.id + 100, // offset to avoid id conflicts
        image: personalCareImageMap[product.id as keyof typeof personalCareImageMap] || product.image,
        subcategory: "Personal Care"
    }));

// Makeup products (hardcoded)
const makeupProducts = [
    {
        id: 200,
        name: "Velvet Matte Lipstick",
        price: 32.00,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop&q=80",
        subcategory: "Makeup"
    },
    {
        id: 201,
        name: "Radiant Glow Foundation",
        price: 48.00,
        image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop&q=80",
        subcategory: "Makeup"
    },
    {
        id: 202,
        name: "Nude Rose Eyeshadow Palette",
        price: 58.00,
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop&q=80",
        subcategory: "Makeup"
    },
    {
        id: 203,
        name: "Silk Blush Duo",
        price: 36.00,
        image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=400&h=400&fit=crop&q=80",
        subcategory: "Makeup"
    },
];

// Hair Care products (hardcoded)
const hairCareProducts = [
    {
        id: 300,
        name: "Nourishing Shampoo",
        price: 34.99,
        image: productShampoo,
        subcategory: "Hair Care"
    },
    {
        id: 301,
        name: "Silk Conditioner",
        price: 32.99,
        image: productConditioner,
        subcategory: "Hair Care"
    },
    {
        id: 302,
        name: "Repair Hair Serum",
        price: 48.99,
        image: productHairSerum,
        subcategory: "Hair Care"
    },
    {
        id: 303,
        name: "Deep Hydration Mask",
        price: 42.99,
        image: productMask,
        subcategory: "Hair Care"
    },
];

// Combine all products
const allProducts = [
    ...skincareProducts,
    ...personalCareProducts,
    ...makeupProducts,
    ...hairCareProducts
];

const HealthBeauty = () => {
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
                                alt="Luxury health and beauty products"
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
                                        Complete Beauty Care
                                        <br />
                                        <span className="text-primary">All in One Place</span>
                                    </h1>
                                    <p className="font-sans text-muted-foreground text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                                        Discover our comprehensive collection of skincare, makeup, hair care, and personal care products for your complete beauty routine.
                                    </p>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                                        <button className="btn-primary px-8 py-3.5 rounded-full font-medium text-base">
                                            Shop All Categories
                                        </button>
                                        <button className="px-8 py-3.5 rounded-full font-medium text-base border-2 border-foreground/20 text-foreground hover:border-primary hover:text-primary transition-colors duration-300">
                                            Find Your Routine
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Featured Products Section */}
                            <div className="space-y-8">
                                <div className="text-center">
                                    <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                                        All Beauty Products
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
                                            <ProductCardHealthBeauty
                                                image={product.image}
                                                name={product.name}
                                                price={product.price}
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

export default HealthBeauty;