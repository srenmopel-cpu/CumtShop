import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  isOnSale?: boolean;
  onAddToCart?: () => void;
}

const ProductCard = ({ image, name, price, originalPrice, isOnSale, onAddToCart }: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl p-4 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
      {/* Sale Badge */}
      {isOnSale && (
        <Badge className="absolute top-2 left-2 z-10 bg-red-500 text-white">
          Sale
        </Badge>
      )}

      {/* Product Image */}
      <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="font-display font-semibold text-lg text-foreground leading-tight">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <p className="font-body font-bold text-xl text-primary">
            ${price.toFixed(2)}
          </p>
          {isOnSale && originalPrice && (
            <p className="font-body text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </p>
          )}
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button
        variant="cart"
        size="default"
        className="w-full mt-4"
        onClick={onAddToCart}
      >
        <ShoppingCart className="w-4 h-4" />
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
