import { useState } from "react";
import { toast } from "sonner";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Import images from FreshFood
import organicStrawberries from "@/assets/FreshFood/Organic Strawberries.jpg";
import freshSalmon from "@/assets/FreshFood/Fresh Atlantic Salmon.jpg";
import avocado from "@/assets/FreshFood/Avocado.jpg";
import ribeye from "@/assets/FreshFood/Premium Ribeye Steak.jpg";

// Import images from Beverages
import icedLatte from "@/assets/Beverages/productBeverages-iced-latte.png";
import mangoSmoothie1 from "@/assets/Beverages/productBeverages-mango-smoothie (1).png";
import bubbleTea from "@/assets/Beverages/productBeverages-bubble-tea.png";
import mangoSmoothie2 from "@/assets/Beverages/productBeverages-mango-smoothie (2).png";

// Import images from Snacks
import productChips from "/Coca.jpg";
import productCookies from "@/assets/Snacks/product-Snacks-chocolate (2).jpg";
import productPopcorn from "@/assets/Snacks/product-Snacks-chocolate (3).jpg";
import productChocolate from "@/assets/Snacks/product-Snacks-chocolate (4).jpg";

// Import images from Frozen
import strawberryIcecream from "@/assets/Frozen/product-strawberry-icecream.png";
import bluePopsicle from "@/assets/Frozen/product-blue-popsicle.png";
import mintFroyo from "@/assets/Frozen/product-mint-froyo.png";
import fruitSmoothie from "@/assets/Frozen/product-fruit-smoothie.png";

// Import ProductCard components
import ProductCard from "@/pages/BanerFreshFood/ProductCardFresh";
import ProductCardBeverages from "@/pages/Beverages/ProductCardBeverages";
import ProductCardSnacks from "@/pages/Snacks/ProductCardSnacks";
import ProductCardFrozen from "@/pages/Frozen/ProductCardFrozen";

type Product = {
    id: number;
    image: string;
    name: string;
    price: number;
    category: string;
    component: string;
    unit?: string;
};

const allProducts: Product[] = [
    // Fresh Food products
    {
        id: 1,
        image: organicStrawberries,
        name: "Organic Strawberries",
        price: 4.99,
        unit: "basket",
        category: "FreshFood",
        component: "ProductCard"
    },
    {
        id: 2,
        image: freshSalmon,
        name: "Fresh Atlantic Salmon",
        price: 12.99,
        unit: "lb",
        category: "FreshFood",
        component: "ProductCard"
    },
    {
        id: 3,
        image: avocado,
        name: "Ripe Avocados",
        price: 2.49,
        unit: "each",
        category: "FreshFood",
        component: "ProductCard"
    },
    {
        id: 4,
        image: ribeye,
        name: "Premium Ribeye Steak",
        price: 18.99,
        unit: "lb",
        category: "FreshFood",
        component: "ProductCard"
    },
    // Beverages products
    {
        id: 5,
        image: icedLatte,
        name: "Caramel Iced Latte",
        price: 5.99,
        category: "Beverages",
        component: "ProductCardBeverages"
    },
    {
        id: 6,
        image: mangoSmoothie1,
        name: "Tropical Mango Smoothie",
        price: 6.49,
        category: "Beverages",
        component: "ProductCardBeverages"
    },
    {
        id: 7,
        image: bubbleTea,
        name: "Classic Bubble Tea",
        price: 4.99,
        category: "Beverages",
        component: "ProductCardBeverages"
    },
    {
        id: 8,
        image: mangoSmoothie2,
        name: "Berry Mango Smoothie",
        price: 6.49,
        category: "Beverages",
        component: "ProductCardBeverages"
    },
    // Snacks products
    {
        id: 9,
        image: productChips,
        name: "Crunchy Salted Chips",
        price: 4.99,
        category: "Snacks",
        component: "ProductCardSnacks"
    },
    {
        id: 10,
        image: productCookies,
        name: "Chocolate Chip Cookies",
        price: 6.49,
        category: "Snacks",
        component: "ProductCardSnacks"
    },
    {
        id: 11,
        image: productPopcorn,
        name: "Classic Buttered Popcorn",
        price: 3.99,
        category: "Snacks",
        component: "ProductCardSnacks"
    },
    {
        id: 12,
        image: productChocolate,
        name: "Hazelnut Chocolate Bar",
        price: 7.99,
        category: "Snacks",
        component: "ProductCardSnacks"
    },
    // Frozen products
    {
        id: 13,
        image: strawberryIcecream,
        name: "Strawberry Bliss Cone",
        price: 5.99,
        category: "Frozen",
        component: "ProductCardFrozen"
    },
    {
        id: 14,
        image: bluePopsicle,
        name: "Blue Raspberry Pop",
        price: 3.49,
        category: "Frozen",
        component: "ProductCardFrozen"
    },
    {
        id: 15,
        image: mintFroyo,
        name: "Mint Chocolate Froyo",
        price: 6.49,
        category: "Frozen",
        component: "ProductCardFrozen"
    },
    {
        id: 16,
        image: fruitSmoothie,
        name: "Tropical Fruit Smoothie",
        price: 7.99,
        category: "Frozen",
        component: "ProductCardFrozen"
    },
];

const FoodDrinks = () => {
    const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

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
            const product = allProducts.find(p => p.id === productId);
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

    const renderProductCard = (product: Product) => {
        const commonProps = {
            key: product.id,
            image: product.image,
            name: product.name,
            price: product.price,
            onAddToCart: () => handleAddToCart(product.name)
        };

        switch (product.component) {
            case "ProductCard":
                return <ProductCard {...commonProps} unit={product.unit} />;
            case "ProductCardBeverages":
                return <ProductCardBeverages {...commonProps} />;
            case "ProductCardSnacks":
                return <ProductCardSnacks {...commonProps} />;
            case "ProductCardFrozen":
                return <ProductCardFrozen {...commonProps} />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex gap-6 flex-1">
                <Sidebar />
                <div className="flex-1">
                    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-primary/10 to-background">
                        {/* Hero Section */}
                        <div className="container mx-auto px-4 py-16">
                            <div className="text-center mb-12">
                                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                                    Food & Drinks
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                    Discover all our delicious food and refreshing drinks in one place
                                </p>
                            </div>

                            {/* Products Grid */}
                            <div className="max-w-7xl mx-auto">
                                <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
                                    All Products
                                </h2>
                                <div
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                                    onMouseMove={handleGridMouseMove}
                                    onClick={handleGridClick}
                                >
                                    {allProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            data-product-id={product.id}
                                            className="animate-fade-in"
                                        >
                                            {renderProductCard(product)}
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

export default FoodDrinks;