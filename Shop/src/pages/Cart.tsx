import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartHeader from "@/components/Cart/CartHeader";
import CartItem from "@/components/Cart/CartItem";
import CartSummary from "@/components/Cart/CartSummary";
import EmptyCart from "@/components/Cart/EmptyCart";
import { useCart, CartItem as CartItemType } from "@/contexts/CartContext";


const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getCartCount } = useCart();
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState<string | undefined>();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 500 ? 0 : 14.99;
  const itemCount = getCartCount();

  const handleApplyCoupon = (code: string) => {
    // Demo: SAVE20 gives 20% off
    if (code === "SAVE20" && !couponApplied) {
      const discountAmount = subtotal * 0.2;
      setDiscount(discountAmount);
      setCouponApplied(code);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <CartHeader itemCount={itemCount} />

        {cart.length > 0 && (
          <div className="mb-6">
            <Link to="/">
              <Button variant="outline" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        )}

        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}

              {/* Free Shipping Notice */}
              {subtotal < 500 && (
                <div className="bg-accent rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🚚</span>
                  </div>
                  <p className="text-sm text-accent-foreground">
                    Add <span className="font-semibold">${(500 - subtotal).toFixed(2)}</span> more for{" "}
                    <span className="font-semibold text-primary">FREE shipping!</span>
                  </p>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <CartSummary
                subtotal={subtotal}
                discount={discount}
                shipping={shipping}
                onApplyCoupon={handleApplyCoupon}
                couponApplied={couponApplied}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

