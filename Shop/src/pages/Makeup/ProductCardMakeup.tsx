import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  onAddToCart?: () => void;
}

const ProductCard = ({ image, name, price, onAddToCart }: ProductCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-card/80 backdrop-blur-md border border-border/50 shadow-card transition-all duration-500 hover:shadow-glow hover:scale-[1.02] hover:border-primary/30">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="font-display text-lg font-semibold text-foreground line-clamp-1 transition-colors group-hover:text-rose-gold">
          {name}
        </h3>
        <p className="font-body text-xl font-medium text-gold">
          ${price.toFixed(2)}
        </p>
        <Button
          onClick={onAddToCart}
          variant="default"
          className="mt-auto w-full"
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>

      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-foreground/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
    </div>
  );
};

export default ProductCard;
