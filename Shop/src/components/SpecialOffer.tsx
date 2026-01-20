import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SpecialOffer = () => {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-primary/10 via-pink-100/50 to-primary/10 rounded-lg p-8 md:p-12 my-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      <div className="relative z-10 text-center">
        <motion.div
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block mb-4"
        >
          <Sparkles className="h-12 w-12 text-primary mx-auto" />
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          {t('specialOfferTitle')}
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-6">
          {t('specialOfferDesc')}
        </p>
        <Button size="lg" className="shadow-lg">
          {t('shopNow')}
        </Button>
      </div>
    </motion.div>
  );
};

export default SpecialOffer;
