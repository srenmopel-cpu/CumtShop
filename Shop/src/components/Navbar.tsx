import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { useSearch } from "@/contexts/SearchContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // Use language context for internationalization
  const { language, setLanguage, t } = useLanguage();
  const { getCartCount } = useCart();
  const { searchQuery, setSearchQuery } = useSearch();
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <img
              src="/CumtLogo.jpg"
              alt="Cumt Logo"
              className="h-10 w-auto cursor-pointer"
              onClick={() => navigate('/')}
            />
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
              <Input
                type="search"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-black/20 focus-visible:ring-2 focus-visible:ring-primary/50 transition-all duration-300"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Language switch buttons */}
            <div className="flex gap-1 hidden sm:flex">
              <Button
                variant={language === 'EN' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('EN')}
              >
                EN
              </Button>
              <Button
                variant={language === 'KH' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('KH')}
              >
                KH
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className="h-5 w-5" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button size="sm" className="hidden sm:flex">
              {t('login')}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
            <Input
              type="search"
              placeholder={t('searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-black/20 focus-visible:ring-2 focus-visible:ring-primary/50 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
