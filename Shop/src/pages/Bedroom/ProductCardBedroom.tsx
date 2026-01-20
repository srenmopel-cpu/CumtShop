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
    <div className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-cream">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => console.log('Image failed to load:', image)}
        />
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <h3 className="font-serif text-lg font-medium text-card-foreground leading-tight">
          {name}
        </h3>

        <div className="flex items-center justify-between gap-3">
          <span className="text-xl font-semibold text-primary">
            ${price.toFixed(2)}
          </span>

          <Button
            onClick={onAddToCart}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-sm px-4 py-2 rounded-md transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
