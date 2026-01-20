import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const brands = [
  { name: "Pepsi", image: "/pepsi.jpg" },
  { name: "Coca-Cola", image: "/Coca.jpg" },
  { name: "TopValu", image: "/TopValu.png" },
  { name: "Cumt", image: "/CumtLogo.jpg" },
];

const BrandSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
        {t('ourPartnerBrands')}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-card rounded-lg p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-all border aspect-square"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BrandSection;
