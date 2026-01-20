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
    <div className="group bg-card rounded-2xl p-4 shadow-product hover:shadow-product-hover transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square rounded-xl overflow-hidden bg-secondary/50 mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-semibold text-foreground text-lg mb-1">{name}</h3>
      <p className="text-primary font-bold text-xl mb-3">${price.toFixed(2)}</p>
      <Button variant="cart" className="w-full" onClick={onAddToCart}>
        <ShoppingCart className="w-4 h-4 mr-2" />
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
