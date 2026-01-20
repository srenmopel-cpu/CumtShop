import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { CartItem } from "@/contexts/CartContext";

interface Order {
    id: string;
    createdAt: string;
    paymentMethod: 'cash' | 'aba' | 'paypal' | 'stripe';
    total: number;
    shippingAddress: {
        fullName: string;
        address: string;
        city: string;
        postalCode: string;
        phone: string;
    };
    items: CartItem[];
}

const OrderConfirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const order: Order | undefined = location.state?.order;

    if (!order) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Order not found</h1>
                    <Button onClick={() => navigate('/')}>Go Home</Button>
                </div>
            </div>
        );
    }

    const paymentMethodNames = {
        cash: 'Cash on Delivery',
        aba: 'ABA Bank',
        paypal: 'PayPal',
        stripe: 'Stripe'
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h1 className="text-3xl font-bold text-green-600 mb-2">Order Confirmed!</h1>
                    <p className="text-muted-foreground">Thank you for your order. Your order has been successfully placed.</p>
                </div>

                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle>Order Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <strong>Order ID:</strong> #{order.id}
                            </div>
                            <div>
                                <strong>Order Date:</strong> {new Date(order.createdAt).toLocaleDateString()}
                            </div>
                            <div>
                                <strong>Payment Method:</strong> {paymentMethodNames[order.paymentMethod]}
                            </div>
                            <div>
                                <strong>Total Amount:</strong> ${order.total.toFixed(2)}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle>Shipping Address</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <p><strong>{order.shippingAddress.fullName}</strong></p>
                            <p>{order.shippingAddress.address}</p>
                            <p>{order.shippingAddress.city}, {order.shippingAddress.postalCode}</p>
                            <p>{order.shippingAddress.phone}</p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle>Order Items</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {order.items.map((item: CartItem) => {
                                const price = item.discount
                                    ? item.price * (1 - item.discount / 100)
                                    : item.price;
                                return (
                                    <div key={item.id} className="flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-12 h-12 object-cover rounded"
                                            />
                                            <div>
                                                <p className="font-medium">{item.name}</p>
                                                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                            </div>
                                        </div>
                                        <span className="font-semibold">${(price * item.quantity).toFixed(2)}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>

                <div className="text-center">
                    <Button onClick={() => navigate('/')} size="lg">
                        Continue Shopping
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;