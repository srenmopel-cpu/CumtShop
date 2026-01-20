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
    <div
      className="card-frost rounded-3xl p-4 flex flex-col items-center group cursor-pointer"
    >
      {/* Product Image */}
      <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-2xl bg-gradient-to-b from-frost to-secondary/30">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-lg"
        />
        {/* Ice crystal decoration */}
        <div className="absolute top-2 right-2 w-8 h-8 bg-ice-blue/20 rounded-full blur-md animate-pulse-soft" />
      </div>

      {/* Product Info */}
      <div className="w-full text-center space-y-2">
        <h3 className="font-display font-semibold text-foreground text-lg leading-tight">
          {name}
        </h3>
        <p className="font-body font-bold text-primary text-xl">
          ${price.toFixed(2)}
        </p>
      </div>

      {/* Add to Cart Button */}
      <Button
        variant="cart"
        size="default"
        className="w-full mt-4"
        onClick={onAddToCart}
      >
        <ShoppingCart className="w-5 h-5" />
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
