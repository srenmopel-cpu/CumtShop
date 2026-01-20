import { ShoppingCart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
    image: string;
    name: string;
    price: number;
    onAddToCart?: () => void;
}

const ProductCardBeverages = ({ image, name, price, onAddToCart }: ProductCardProps) => {
    return (
        <Card
            className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 shadow-md"
        >
            <div className="relative overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Badge className="absolute top-3 left-3 bg-blue-500 text-white">
                    Beverage
                </Badge>
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">4.8</span>
                </div>
            </div>

            <CardContent className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2">
                    {name}
                </h3>
                <div className="flex items-center justify-between mb-4">
                    <p className="text-blue-600 font-bold text-xl">
                        ${price.toFixed(2)}
                    </p>
                </div>

                <Button
                    variant="cart"
                    size="default"
                    className="w-full"
                    onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart?.();
                    }}
                >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProductCardBeverages;