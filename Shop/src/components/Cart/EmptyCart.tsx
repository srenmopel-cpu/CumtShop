import { ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-6">
        <ShoppingBag className="h-12 w-12 text-muted-foreground" />
      </div>
      <h2 className="text-xl font-semibold text-foreground mb-2">
        Your cart is empty
      </h2>
      <p className="text-muted-foreground text-center max-w-sm mb-6">
        Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
      </p>
      <Link to="/">
        <Button className="group shadow-cart-button">
          Continue Shopping
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  );
};

export default EmptyCart;
