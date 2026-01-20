import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  onAddToCart?: () => void;
}

const ProductCard = ({ image, name, price, originalPrice, onAddToCart }: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary/50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {originalPrice && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
            Sale
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <h3 className="font-medium text-card-foreground text-sm leading-tight line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-price">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-price-original line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <Button
          onClick={onAddToCart}
          className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200"
          size="sm"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
