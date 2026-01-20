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
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center">
                        <div className="mb-8">
                            {/* Empty cart illustration - simple SVG */}
                            <svg className="w-32 h-32 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13l-1.1 5M7 13h10m0 0v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-5m10 0l1.1-5H6.9" />
                            </svg>
                        </div>
                        <h1 className="text-4xl font-bold mb-4 text-gray-800">Your Cart is Empty</h1>
                        <p className="text-muted-foreground mb-6 text-lg">Looks like you haven't added anything yet. Let's fill it up!</p>
                        <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                            Continue Shopping
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        {cart.map((item) => {
                            const price = item.discount
                                ? item.price * (1 - item.discount / 100)
                                : item.price;
                            const itemTotal = price * item.quantity;

                            return (
                                <div key={item.id} className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl p-6 transition-all duration-300 hover:scale-[1.02] border border-white/20">
                                    <div className="flex items-center gap-6">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-24 h-24 object-cover rounded-xl shadow-md"
                                        />

                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg text-gray-800 mb-1">{item.name}</h3>
                                            <p className="text-sm text-gray-600">
                                                <span className="text-accent font-semibold">${price.toFixed(2)}</span> each
                                                {item.discount && (
                                                    <span className="ml-2 text-red-500 font-medium">
                                                        ({item.discount}% off)
                                                    </span>
                                                )}
                                            </p>
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className="flex items-center gap-3 bg-gray-100 rounded-full p-1">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                className="h-8 w-8 rounded-full hover:bg-white hover:shadow-md transition-all"
                                            >
                                                <Minus className="h-4 w-4" />
                                            </Button>

                                            <span className="px-3 py-1 bg-white rounded-full font-semibold text-gray-800 min-w-[3rem] text-center">
                                                {item.quantity}
                                            </span>

                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                className="h-8 w-8 rounded-full hover:bg-white hover:shadow-md transition-all"
                                            >
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>

                                        {/* Item Total */}
                                        <div className="text-right">
                                            <p className="font-bold text-xl text-gray-800">${itemTotal.toFixed(2)}</p>
                                        </div>

                                        {/* Remove Button */}
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => handleRemoveItem(item.id)}
                                            className="text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200"
                                        >
                                            <Trash2 className="h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Clear Cart */}
                        <div className="mt-6 text-center">
                            <Button
                                variant="outline"
                                onClick={clearCart}
                                className="border-red-300 text-red-500 hover:bg-red-50 hover:border-red-400 rounded-full px-6 py-2 transition-all duration-300"
                            >
                                Clear Cart
                            </Button>
                        </div>
                    </div>

                    {/* Coupon Input */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/20">
                        <h3 className="font-semibold text-lg mb-4 text-gray-800">Have a Coupon?</h3>
                        <div className="flex gap-3">
                            <Input
                                placeholder="Enter coupon code"
                                className="flex-1 rounded-full border-2 border-gray-200 focus:border-blue-400 focus:shadow-lg transition-all duration-300"
                            />
                            <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                Apply
                            </Button>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">Get discounts on your order!</p>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:sticky lg:top-8">
                        <Card className="bg-gradient-to-br from-blue-50 via-white to-purple-50 border-0 shadow-xl rounded-2xl overflow-hidden">
                            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-2xl">
                                <CardTitle className="text-xl">Price Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700">Subtotal</span>
                                        <span className="font-semibold">${cart.reduce((sum, item) => item.price * item.quantity, 0).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700">Discount</span>
                                        <span className="font-semibold text-green-600">-${(cart.reduce((sum, item) => item.price * item.quantity, 0) - getTotalPrice()).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700">Tax</span>
                                        <span className="font-semibold">${(getTotalPrice() * 0.08).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700">Shipping</span>
                                        <span className="font-semibold text-green-600">Free</span>
                                    </div>
                                    <Separator className="my-4" />
                                    <div className="flex justify-between items-center text-2xl font-bold text-gray-800">
                                        <span>Total</span>
                                        <span>${(getTotalPrice() + getTotalPrice() * 0.08).toFixed(2)}</span>
                                    </div>

                                    <Button
                                        onClick={() => navigate('/checkout')}
                                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-semibold mt-6"
                                        size="lg"
                                    >
                                        Proceed to Checkout
                                    </Button>

                                    <Button
                                        variant="outline"
                                        onClick={() => navigate('/')}
                                        className="w-full border-2 border-gray-300 hover:border-blue-400 rounded-full py-3 transition-all duration-300 hover:shadow-md"
                                    >
                                        Continue Shopping
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Mobile Sticky Checkout Button */}
                <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200 p-4 shadow-2xl z-50">
                    <Button
                        onClick={() => navigate('/checkout')}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
                        size="lg"
                    >
                        Proceed to Checkout - ${(getTotalPrice() + getTotalPrice() * 0.08).toFixed(2)}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;