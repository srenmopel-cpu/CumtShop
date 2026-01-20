import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  delay?: number;
}

const ProductCard = ({ image, name, price, delay = 0 }: ProductCardProps) => {
  return (
    <div 
      className="product-card group"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Product Image Container */}
      <div className="relative overflow-hidden bg-cream p-6">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-contain transition-transform duration-700 group-hover:scale-110"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Product Info */}
      <div className="p-5 space-y-3">
        <h3 className="font-serif text-lg font-medium text-foreground leading-tight">
          {name}
        </h3>
        <p className="font-sans text-primary font-semibold text-lg">
          {price}
        </p>
        
        {/* Add to Cart Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0">
          <ShoppingBag className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
