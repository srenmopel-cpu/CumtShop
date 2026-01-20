import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Trash2, Minus, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
    const navigate = useNavigate();

    const handleQuantityChange = (id: number, newQuantity: number) => {
        if (newQuantity < 1) {
            removeFromCart(id);
        } else {
            updateQuantity(id, newQuantity);
        }
    };

    const handleRemoveItem = (id: number) => {
        removeFromCart(id);
    };

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
                    <p className="text-muted-foreground mb-6">Add some products to get started!</p>
                    <Button onClick={() => navigate('/')}>Continue Shopping</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Cart Items ({cart.length})</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {cart.map((item) => {
                                const price = item.discount
                                    ? item.price * (1 - item.discount / 100)
                                    : item.price;
                                const itemTotal = price * item.quantity;

                                return (
                                    <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded"
                                        />

                                        <div className="flex-1">
                                            <h3 className="font-semibold">{item.name}</h3>
                                            <p className="text-sm text-muted-foreground">
                                                ${price.toFixed(2)} each
                                                {item.discount && (
                                                    <span className="ml-2 text-red-500">
                                                        ({item.discount}% off)
                                                    </span>
                                                )}
                                            </p>
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                            >
                                                <Minus className="h-4 w-4" />
                                            </Button>

                                            <Input
                                                type="number"
                                                value={item.quantity}
                                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
                                                className="w-16 text-center"
                                                min="1"
                                            />

                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                            >
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>

                                        {/* Item Total */}
                                        <div className="text-right">
                                            <p className="font-semibold">${itemTotal.toFixed(2)}</p>
                                        </div>

                                        {/* Remove Button */}
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => handleRemoveItem(item.id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                );
                            })}
                        </CardContent>
                    </Card>

                    {/* Clear Cart */}
                    <div className="mt-4">
                        <Button
                            variant="outline"
                            onClick={clearCart}
                            className="text-red-500 hover:text-red-700"
                        >
                            Clear Cart
                        </Button>
                    </div>
                </div>

                {/* Order Summary */}
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Items ({cart.reduce((sum, item) => sum + item.quantity, 0)}):</span>
                                    <span>${getTotalPrice().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping:</span>
                                    <span>Free</span>
                                </div>
                                <Separator />
                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total:</span>
                                    <span>${getTotalPrice().toFixed(2)}</span>
                                </div>

                                <Button
                                    onClick={() => navigate('/checkout')}
                                    className="w-full"
                                    size="lg"
                                >
                                    Proceed to Checkout
                                </Button>

                                <Button
                                    variant="outline"
                                    onClick={() => navigate('/')}
                                    className="w-full"
                                >
                                    Continue Shopping
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Cart;