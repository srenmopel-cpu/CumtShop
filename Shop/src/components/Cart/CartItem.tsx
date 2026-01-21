import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/contexts/CartContext";

export type CartItemType = CartItem;

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  return (
    <div className="group flex gap-4 p-4 bg-card rounded-xl shadow-cart-card hover:shadow-cart-card-hover transition-all duration-300">
      {/* Product Image */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-foreground truncate pr-2">
            {item.name}
          </h3>
          {item.variant && (
            <p className="text-sm text-muted-foreground mt-0.5">{item.variant}</p>
          )}
        </div>

        <div className="flex items-end justify-between gap-4 mt-2">
          {/* Quantity Controls */}
          <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-md hover:bg-background"
              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center font-medium text-sm">
              {item.quantity}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-md hover:bg-background"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          {/* Price */}
          <p className="font-semibold text-lg text-foreground">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Remove Button */}
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors self-start opacity-0 group-hover:opacity-100"
        onClick={() => onRemove(item.id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
