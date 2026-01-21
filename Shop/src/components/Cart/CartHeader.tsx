import { ShoppingCart } from "lucide-react";

interface CartHeaderProps {
  itemCount: number;
}

const CartHeader = ({ itemCount }: CartHeaderProps) => {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <ShoppingCart className="h-6 w-6 text-primary" />
        </div>
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-cart-badge text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center animate-in zoom-in duration-200">
            {itemCount}
          </span>
        )}
      </div>
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          Shopping Cart
        </h1>
        <p className="text-muted-foreground text-sm">
          {itemCount === 0
            ? "Your cart is empty"
            : `${itemCount} item${itemCount > 1 ? "s" : ""} in your cart`}
        </p>
      </div>
    </div>
  );
};

export default CartHeader;
