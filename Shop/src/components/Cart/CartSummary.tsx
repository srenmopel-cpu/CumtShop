import { useState } from "react";
import { Tag, ArrowRight, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

interface CartSummaryProps {
  subtotal: number;
  discount: number;
  shipping: number;
  onApplyCoupon: (code: string) => void;
  couponApplied?: string;
}

const CartSummary = ({
  subtotal,
  discount,
  shipping,
  onApplyCoupon,
  couponApplied,
}: CartSummaryProps) => {
  const [couponCode, setCouponCode] = useState("");
  const total = subtotal - discount + shipping;

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      onApplyCoupon(couponCode.trim().toUpperCase());
      setCouponCode("");
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-cart-card p-6 sticky top-6">
      <h2 className="text-xl font-semibold text-foreground mb-6">Order Summary</h2>

      {/* Promo Code */}
      <div className="mb-6">
        <label className="text-sm font-medium text-muted-foreground mb-2 block">
          Promo Code
        </label>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Enter code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="pl-10 bg-secondary border-0 focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
          <Button
            variant="outline"
            onClick={handleApplyCoupon}
            className="px-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Apply
          </Button>
        </div>
        {couponApplied && (
          <p className="text-sm text-cart-success mt-2 flex items-center gap-1">
            <ShieldCheck className="h-4 w-4" />
            Code "{couponApplied}" applied!
          </p>
        )}
      </div>

      <Separator className="bg-cart-divider mb-4" />

      {/* Price Breakdown */}
      <div className="space-y-3 mb-4">
        <div className="flex justify-between text-muted-foreground">
          <span>Subtotal</span>
          <span className="font-medium text-foreground">${subtotal.toFixed(2)}</span>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between text-cart-success">
            <span>Discount</span>
            <span className="font-medium">-${discount.toFixed(2)}</span>
          </div>
        )}
        
        <div className="flex justify-between text-muted-foreground">
          <span className="flex items-center gap-1">
            <Truck className="h-4 w-4" />
            Shipping
          </span>
          <span className="font-medium text-foreground">
            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
          </span>
        </div>
      </div>

      <Separator className="bg-cart-divider mb-4" />

      {/* Total */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-semibold text-foreground">Total</span>
        <span className="text-2xl font-bold text-primary">
          ${total.toFixed(2)}
        </span>
      </div>

      {/* Checkout Button */}
      <Button
        className="w-full h-14 text-base font-semibold shadow-cart-button hover:shadow-lg transition-all duration-300 group"
        size="lg"
      >
        Proceed to Checkout
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Button>

      {/* Trust Badges */}
      <div className="mt-6 pt-4 border-t border-cart-divider">
        <div className="flex items-center justify-center gap-4 opacity-60">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/196/196578.png" 
            alt="Visa" 
            className="h-8 grayscale hover:grayscale-0 transition-all"
          />
          <img 
            src="https://cdn-icons-png.flaticon.com/512/196/196561.png" 
            alt="Mastercard" 
            className="h-8 grayscale hover:grayscale-0 transition-all"
          />
          <img 
            src="https://cdn-icons-png.flaticon.com/512/196/196565.png" 
            alt="PayPal" 
            className="h-8 grayscale hover:grayscale-0 transition-all"
          />
          <img 
            src="https://cdn-icons-png.flaticon.com/512/196/196539.png" 
            alt="Apple Pay" 
            className="h-8 grayscale hover:grayscale-0 transition-all"
          />
        </div>
        <p className="text-xs text-muted-foreground text-center mt-3 flex items-center justify-center gap-1">
          <ShieldCheck className="h-3.5 w-3.5" />
          Secure checkout with SSL encryption
        </p>
      </div>
    </div>
  );
};

export default CartSummary;
