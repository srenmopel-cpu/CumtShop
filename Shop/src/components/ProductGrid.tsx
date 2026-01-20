import ProductCard from "./ProductCard";
import { featuredProducts as beveragesProducts } from "@/pages/Beverages/Beverages";
import { featuredProducts as snacksProducts } from "@/pages/Snacks/Snacks";
import { featuredProducts as frozenProducts } from "@/pages/Frozen/Frozen";
import { products as freshFoodProducts } from "@/pages/BanerFreshFood/FreshFood";
import { featuredProducts as bathroomProducts } from "@/pages/Bathroom/Bathroom";
import { featuredProducts as decorProducts } from "@/pages/Decor/Decor";
import { featuredProducts as hairCareProducts } from "@/pages/HairCare/HairCare";
import { featuredProducts as kitchenProducts } from "@/pages/Kitchen/Kitchen";
import { featuredProducts as makeupProducts } from "@/pages/Makeup/Makeup";
import { allProducts as personalCareProducts } from "@/pages/PersonalCare/PersonalCare";
import { allProducts as skincareProducts } from "@/pages/Skincare/Skincare";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSearch } from "@/contexts/SearchContext";

const ProductGrid = () => {
  const { t } = useLanguage();
  const { searchQuery } = useSearch();

  // Combine all products from different categories
  const allProducts = [
    ...beveragesProducts,
    ...snacksProducts,
    ...frozenProducts,
    ...freshFoodProducts,
    ...bathroomProducts,
    ...decorProducts,
    ...hairCareProducts,
    ...kitchenProducts,
    ...makeupProducts,
    ...personalCareProducts,
    ...skincareProducts,
  ];

  // Filter products based on search query
  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">{t('featuredProducts')}</h2>
        <select className="px-4 py-2 rounded-md border bg-background text-sm">
          <option>{t('sortByPopular')}</option>
          <option>{t('priceLowToHigh')}</option>
          <option>{t('priceHighToLow')}</option>
          <option>{t('newest')}</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
