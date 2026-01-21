import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Star, Package, Truck, UtensilsCrossed, Heart, Home, X, Coffee, Flower, Lamp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const categoryData = [


  {
    id: 5,
    nameKey: "foodDrinks",
    path: "/food-drinks",
    subcategories: [
      { nameKey: "freshFood", path: "/fresh-food" },
      { nameKey: "beverages", path: "/beverages" },
      { nameKey: "snacks", path: "/snacks" },
      { nameKey: "frozen", path: "/frozen" },
    ],
  },
  {
    id: 6,
    nameKey: "healthBeauty",
    path: "/health-beauty",
    subcategories: [
      { nameKey: "skincare", path: "/health-beauty/skincare" },
      { nameKey: "makeup", path: "/health-beauty/makeup" },
      { nameKey: "hairCare", path: "/health-beauty/hair-care" },
      { nameKey: "personalCare", path: "/health-beauty/personal-care" },
    ]
  },
  {
    id: 7,
    nameKey: "homeLiving",
    path: "/home-living",
    subcategories: [
      { nameKey: "kitchen", path: "/kitchen" },
      { nameKey: "bedroom", path: "/bedroom" },
      { nameKey: "bathroom", path: "/bathroom" },
      { nameKey: "decor", path: "/decor" },
    ],
  },
];

const Sidebar = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const getIcon = (id: number) => {
    switch (id) {
      case 5: return Coffee;
      case 6: return Flower;
      case 7: return Lamp;
      default: return Package;
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      // default to foodDrinks on home
      setExpandedCategory(5);
    } else if (location.pathname.startsWith('/health-beauty')) {
      setExpandedCategory(6);
    } else if (location.pathname.startsWith('/home-living')) {
      setExpandedCategory(7);
    } else if (location.pathname.startsWith('/food-drinks') ||
      location.pathname.startsWith('/fresh-food') ||
      location.pathname.startsWith('/beverages') ||
      location.pathname.startsWith('/snacks') ||
      location.pathname.startsWith('/frozen')) {
      setExpandedCategory(5);
    } else {
      setExpandedCategory(null);
    }
  }, [location.pathname]);

  const toggleCategory = (id: number) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <aside className="w-64 bg-white/90 rounded-2xl shadow-lg border border-gray-200/50 p-4 sticky top-20 h-fit">
      <h3 className="font-bold text-lg mb-4 text-foreground">{t('categories')}</h3>
      <nav className="space-y-1">
        {categoryData.map((category) => (
          <div key={category.id}>
            {category.subcategories.length > 0 ? (
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-accent transition-colors text-left group cursor-pointer"
              >
                <span className="flex items-center flex-1 text-sm font-medium text-foreground group-hover:text-primary">
                  {(() => { const Icon = getIcon(category.id); const iconClass = category.id === 5 ? "h-4 w-4 mr-2 text-orange-500" : category.id === 6 ? "h-4 w-4 mr-2 text-pink-400" : category.id === 7 ? "h-4 w-4 mr-2 text-amber-500" : "h-4 w-4 mr-2"; return <Icon className={iconClass} />; })()}
                  {t(category.nameKey)}
                </span>
                <motion.div
                  animate={{ rotate: expandedCategory === category.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </motion.div>
              </button>
            ) : (
              <Link
                to={category.path}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-accent transition-colors text-left group"
              >
                <span className="flex items-center flex-1 text-sm font-medium text-foreground group-hover:text-primary">
                  {(() => { const Icon = getIcon(category.id); const iconClass = category.id === 5 ? "h-4 w-4 mr-2 text-orange-500" : category.id === 6 ? "h-4 w-4 mr-2 text-pink-400" : category.id === 7 ? "h-4 w-4 mr-2 text-amber-500" : "h-4 w-4 mr-2"; return <Icon className={iconClass} />; })()}
                  {t(category.nameKey)}
                </span>
              </Link>
            )}
            <AnimatePresence>
              {expandedCategory === category.id && category.subcategories.length > 0 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pl-6 py-2 space-y-1">
                    {category.subcategories.map((sub, index) => (
                      <Link
                        key={index}
                        to={sub.path}
                        className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent/50"
                      >
                        {t(sub.nameKey)}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>

    </aside>
  );
};

export default Sidebar;
