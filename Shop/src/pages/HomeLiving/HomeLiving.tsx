import React from "react";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Kitchen products
import productCuttingBoard from "@/assets/Kitchen/product-cutting-board.jpg";
import productKettle from "@/assets/Kitchen/product-kettle.jpg";
import productKnife from "@/assets/Kitchen/product-knife.jpg";
import productPan from "@/assets/Kitchen/product-pan.jpg";

// Bedroom products
import productBlanket from "@/assets/Bedroom/product-blanket.jpg";
import productLamp from "@/assets/Bedroom/product-lamp.jpg";
import productMattress from "@/assets/Bedroom/product-mattress.jpg";
import productPillows from "@/assets/Bedroom/product-pillows.jpg";

// Bathroom products
import productDispenser from "@/assets/Bathroom/product-dispenser.jpg";
import productMat from "@/assets/Bathroom/product-mat.jpg";
import productMirror from "@/assets/Bathroom/product-mirror.jpg";
import productTowels from "@/assets/Bathroom/product-towels.jpg";

// Decor products
import productCandle from "@/assets/Decor/product-candle.jpg";
import productDecorMirror from "@/assets/Decor/product-mirror (1).jpg";
import productVase from "@/assets/Decor/product-vase.jpg";
import productWallArt from "@/assets/Decor/product-wall-art.jpg";

const kitchenProducts = [
    { id: 1, name: "Bamboo Cutting Board", price: 39.99, category: "Kitchen", image: productCuttingBoard },
    { id: 2, name: "Electric Kettle", price: 49.99, category: "Kitchen", image: productKettle },
    { id: 3, name: "Chef's Knife Set", price: 89.99, category: "Kitchen", image: productKnife },
    { id: 4, name: "Non-Stick Frying Pan", price: 34.99, category: "Kitchen", image: productPan },
];

const bedroomProducts = [
    { id: 5, name: "Luxury Cloud Mattress", price: 899.00, category: "Bedroom", image: productMattress },
    { id: 6, name: "Premium Pillow Set", price: 129.00, category: "Bedroom", image: productPillows },
    { id: 7, name: "Cozy Knit Throw", price: 89.00, category: "Bedroom", image: productBlanket },
    { id: 8, name: "Nordic Bedside Lamp", price: 149.00, category: "Bedroom", image: productLamp },
];

const bathroomProducts = [
    { id: 9, name: "Premium Egyptian Cotton Towel Set", price: 49.99, discount: 29, category: "Bathroom", image: productTowels },
    { id: 10, name: "Ceramic Soap Dispenser Set", price: 29.99, category: "Bathroom", image: productDispenser },
    { id: 11, name: "LED Backlit Round Mirror", price: 189.99, discount: 24, category: "Bathroom", image: productMirror },
    { id: 12, name: "Memory Foam Bath Mat", price: 34.99, category: "Bathroom", image: productMat },
];

const decorProducts = [
    { id: 13, name: "Scented Candle Collection", price: 24.99, category: "Decor", image: productCandle },
    { id: 14, name: "Decorative Wall Mirror", price: 79.99, category: "Decor", image: productDecorMirror },
    { id: 15, name: "Ceramic Vase Set", price: 39.99, category: "Decor", image: productVase },
    { id: 16, name: "Abstract Wall Art", price: 59.99, category: "Decor", image: productWallArt },
];

const HomeLiving = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex gap-6 flex-1">
                <Sidebar />
                <div className="flex-1">
                    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
                        {/* Content */}
                        <div className="relative z-10 container mx-auto px-4 py-16">
                            {/* Headline */}
                            <div className="mb-16 text-center animate-fade-up">
                                <h1 className="mb-4 text-4xl font-extrabold leading-tight text-foreground drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
                                    Home & Living
                                    <br />
                                    <span className="text-secondary">Comfort in Every Corner!</span>
                                </h1>
                                <p className="mx-auto max-w-2xl text-lg text-muted-foreground drop-shadow-md sm:text-xl">
                                    Transform your space with our curated selection of home essentials and decor.
                                </p>
                            </div>

                            {/* Kitchen Section */}
                            <div className="mb-16 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                                <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
                                    Kitchen Essentials
                                </h2>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                    {kitchenProducts.map((product, index) => (
                                        <div
                                            key={product.id}
                                            className="animate-scale-in"
                                            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                                        >
                                            <ProductCard product={product} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bedroom Section */}
                            <div className="mb-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                                <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
                                    Bedroom Comfort
                                </h2>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                    {bedroomProducts.map((product, index) => (
                                        <div
                                            key={product.id}
                                            className="animate-scale-in"
                                            style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                                        >
                                            <ProductCard product={product} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bathroom Section */}
                            <div className="mb-16 animate-fade-up" style={{ animationDelay: "0.6s" }}>
                                <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
                                    Bathroom Luxury
                                </h2>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                    {bathroomProducts.map((product, index) => (
                                        <div
                                            key={product.id}
                                            className="animate-scale-in"
                                            style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                                        >
                                            <ProductCard product={product} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Decor Section */}
                            <div className="animate-fade-up" style={{ animationDelay: "0.8s" }}>
                                <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
                                    Home Decor
                                </h2>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                    {decorProducts.map((product, index) => (
                                        <div
                                            key={product.id}
                                            className="animate-scale-in"
                                            style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                                        >
                                            <ProductCard product={product} />
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

export default HomeLiving;