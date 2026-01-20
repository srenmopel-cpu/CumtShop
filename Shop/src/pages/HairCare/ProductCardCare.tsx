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
    <div className="group relative flex flex-col bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-soft-beige p-6">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col p-5 gap-3">
        <h3 className="font-display text-lg font-medium text-foreground leading-tight">
          {name}
        </h3>
        <p className="text-xl font-semibold text-primary">
          ${price.toFixed(2)}
        </p>
        <Button
          variant="cart"
          size="default"
          onClick={onAddToCart}
          className="mt-1 w-full"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
