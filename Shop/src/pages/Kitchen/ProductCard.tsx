import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  onAddToCart?: () => void;
}

const ProductCard = ({ image, name, price, onAddToCart }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-lg p-4 shadow-card hover:shadow-card-hover transition-all duration-300 animate-scale-in">
      <div className="relative overflow-hidden rounded-md mb-4 bg-secondary/30">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3">
        <h3 className="font-semibold text-card-foreground text-lg leading-tight line-clamp-2">
          {name}
        </h3>
        <p className="text-xl font-bold text-primary">
          ${price.toFixed(2)}
        </p>
        <Button
          variant="cart"
          className="w-full"
          onClick={onAddToCart}
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
