import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { SearchProvider } from "@/contexts/SearchContext";
import Index from "./pages/Index";
import FreshFood from "./pages/BanerFreshFood/FreshFood";
import Beverages from "./pages/Beverages/Beverages";
import Snacks from "./pages/Snacks/Snacks";
import Frozen from "./pages/Frozen/Frozen";
import FoodDrinks from "./pages/FoodDrinks/FoodDrinks";
import HealthBeauty from "./pages/HealthBeauty/HealthBeauty";
import Skincare from "./pages/Skincare/Skincare";
import Makeup from "./pages/Makeup/Makeup";
import HairCare from "./pages/HairCare/HairCare";
import PersonalCare from "./pages/PersonalCare/PersonalCare";
import HomeLiving from "./pages/HomeLiving/HomeLiving";
import Kitchen from "./pages/Kitchen/Kitchen";
import Bedroom from "./pages/Bedroom/Bedroom";
import Bathroom from "./pages/Bathroom/Bathroom";
import Decor from "./pages/Decor/Decor";
import Cart from "./pages/Cart";
import OrderConfirmation from "./pages/OrderConfirmation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <CartProvider>
        <SidebarProvider>
          <SearchProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/fresh-food" element={<FreshFood />} />
                  <Route path="/beverages" element={<Beverages />} />
                  <Route path="/snacks" element={<Snacks />} />
                  <Route path="/frozen" element={<Frozen />} />
                  <Route path="/food-drinks" element={<FoodDrinks />} />
                  <Route path="/health-beauty" element={<HealthBeauty />} />
                  <Route path="/health-beauty/skincare" element={<Skincare />} />
                  <Route path="/health-beauty/makeup" element={<Makeup />} />
                  <Route path="/health-beauty/hair-care" element={<HairCare />} />
                  <Route path="/health-beauty/personal-care" element={<PersonalCare />} />
                  <Route path="/home-living" element={<HomeLiving />} />
                  <Route path="/kitchen" element={<Kitchen />} />
                  <Route path="/bedroom" element={<Bedroom />} />
                  <Route path="/bathroom" element={<Bathroom />} />
                  <Route path="/decor" element={<Decor />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/order-confirmation" element={<OrderConfirmation />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </SearchProvider>
        </SidebarProvider>
      </CartProvider>
    </LanguageProvider>
  </QueryClientProvider >
);

export default App;

