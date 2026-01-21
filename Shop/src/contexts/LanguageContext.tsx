import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'KH';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    EN: {
        searchPlaceholder: 'Search for products...',
        login: 'Login',
        // HeroBanner
        halloweenSale: 'Happy Halloween Sale!',
        halloweenSubtitle: 'Get up to 50% OFF on selected items',
        newArrivals: 'New Arrivals',
        newArrivalsSubtitle: 'Discover the latest products this season',
        specialOffer: 'Special Offer',
        specialOfferSubtitle: 'Buy 2 Get 1 Free on all beauty products',
        shopNow: 'Shop Now',
        // Sidebar
        categories: 'Categories',
        popularProducts: 'Popular Products',
        newArrivalsCat: 'New Arrivals',
        localProducts: 'Local Products',
        internationalBrands: 'International Brands',
        foodDrinks: 'Food & Drinks',
        healthBeauty: 'Health & Beauty',
        homeLiving: 'Home & Living',
        topValu: 'TopValu',
        daiso: 'Daiso',
        icInnercasual: 'iC Innercasual',
        iRashiku: 'i-Rashiku',
        freshFood: 'Fresh Food',
        beverages: 'Beverages',
        snacks: 'Snacks',
        frozen: 'Frozen',
        skincare: 'Skincare',
        makeup: 'Makeup',
        hairCare: 'Hair Care',
        personalCare: 'Personal Care',
        kitchen: 'Kitchen',
        bedroom: 'Bedroom',
        bathroom: 'Bathroom',
        decor: 'Decor',
        // ProductGrid
        featuredProducts: 'Featured Products',
        sortByPopular: 'Sort by: Popular',
        priceLowToHigh: 'Price: Low to High',
        priceHighToLow: 'Price: High to Low',
        newest: 'Newest',
        // ProductCard
        addToCart: 'Add to Cart',
        // SpecialOffer
        specialOfferTitle: 'Special Offer',
        specialOfferDesc: 'Up to 50% OFF on Selected Items',
        // BrandSection
        ourPartnerBrands: 'Our Partner Brands',
        // Footer
        footerDesc: 'Your trusted online shopping destination for quality products at great prices.',
        followUs: 'Follow Us',
        contactUs: 'Contact Us',
        quickLinks: 'Quick Links',
        customerService: 'Customer Service',
        home: 'Home',
        shop: 'Shop',
        aboutUs: 'About Us',
        deliveryInfo: 'Delivery Information',
        privacyPolicy: 'Privacy Policy',
        termsConditions: 'Terms & Conditions',
        faqs: 'FAQs',
        helpCenter: 'Help Center',
        shippingDelivery: 'Shipping & Delivery',
        returnsRefunds: 'Returns & Refunds',
        cookiePolicy: 'Cookie Policy',
        secureCheckout: 'Secure Checkout',
        freeShipping: 'Free Shipping $50+',
        dayReturns: '30-Day Returns',
        securePayment: 'Secure Payment',
        copyright: '© 2024 AEON Online Cambodia. All rights reserved.',
    },
    KH: {
        searchPlaceholder: 'ស្វែងរកផលិតផល...',
        login: 'ចូល',
        // HeroBanner
        halloweenSale: 'ការលក់ថ្ងៃហាឡូវីនរីករាយ!',
        halloweenSubtitle: 'ទទួលបានរហូតដល់ 50% OFF នៅលើធាតុដែលបានជ្រើសរើស',
        newArrivals: 'ការមកដល់ថ្មី',
        newArrivalsSubtitle: 'ស្វែងយល់ពីផលិតផលចុងក្រោយបំផុតនៅរដូវកាលនេះ',
        specialOffer: 'ការផ្តល់ជូនពិសេស',
        specialOfferSubtitle: 'ទិញ 2 ទទួល 1 សេរីនៅលើផលិតផលសម្រស់ទាំងអស់',
        shopNow: 'ទិញឥឡូវនេះ',
        // Sidebar
        categories: 'ប្រភេទ',
        popularProducts: 'ផលិតផលពេញនិយម',
        newArrivalsCat: 'ការមកដល់ថ្មី',
        localProducts: 'ផលិតផលក្នុងស្រុក',
        internationalBrands: 'ម៉ាកអន្តរជាតិ',
        foodDrinks: 'អាហារ និងភេសជ្ជៈ',
        healthBeauty: 'សុខភាព និងសម្រស់',
        homeLiving: 'ផ្ទះ និងជីវិត',
        topValu: 'TopValu',
        daiso: 'Daiso',
        icInnercasual: 'iC Innercasual',
        iRashiku: 'i-Rashiku',
        freshFood: 'អាហារស្រស់',
        beverages: 'ភេសជ្ជៈ',
        snacks: 'អាហារស្រាប់',
        frozen: 'ការទូទឹកកក',
        skincare: 'ការថែរក្សាស្បែក',
        makeup: 'ម៉ាកឡើង',
        hairCare: 'ការថែរក្សាសក់',
        personalCare: 'ការថែរក្សាផ្ទាល់ខ្លួន',
        kitchen: 'ផ្ទះបាយ',
        bedroom: 'បន្ទប់គេង',
        bathroom: 'បន្ទប់ទឹក',
        decor: 'ការតុបតែង',
        // ProductGrid
        featuredProducts: 'ផលិតផលពិសេស',
        sortByPopular: 'តម្រៀបតាម៖ ពេញនិយម',
        priceLowToHigh: 'តម្លៃ៖ ទាបទៅខ្ពស់',
        priceHighToLow: 'តម្លៃ៖ ខ្ពស់ទៅទាប',
        newest: 'ថ្មីបំផុត',
        // ProductCard
        addToCart: 'បន្ថែមទៅរទេះ',
        // SpecialOffer
        specialOfferTitle: 'ការផ្តល់ជូនពិសេស',
        specialOfferDesc: 'រហូតដល់ 50% OFF នៅលើធាតុដែលបានជ្រើសរើស',
        // BrandSection
        ourPartnerBrands: 'ម៉ាកដៃគូររបស់យើង',
        // Footer
        footerDesc: 'ទីតាំងទិញទំនិញតាមអ៊ីនធឺណិតដែលអ្នកទុកចិត្តសម្រាប់ផលិតផលគុណភាពក្នុងតម្លៃដ៏ល្អ។',
        followUs: 'តាមដានយើង',
        contactUs: 'ទាក់ទងយើង',
        quickLinks: 'តំណរភ្ជាប់រហ័ស',
        customerService: 'សេវាកម្មអតិថិជន',
        home: 'ទំព័រដើម',
        shop: 'ហាង',
        aboutUs: 'អំពីយើង',
        deliveryInfo: 'ព័ត៌មានការដឹកជញ្ជូន',
        privacyPolicy: 'គោលការណ៍ភាពឯកជន',
        termsConditions: 'ល័ក្ខខ័ណ្ឌ និងលក្ខខ័ណ្ឌ',
        faqs: 'សំណួរគេសួរញឹកញាប់',
        helpCenter: 'មជ្ឈមណ្ឌលជំនួយ',
        shippingDelivery: 'ការដឹកជញ្ជូន',
        returnsRefunds: 'ការត្រឡប់ និងសងប្រាក់',
        cookiePolicy: 'គោលការណ៍ខូគី',
        secureCheckout: 'ការទូទាត់ប្រាក់ដោយសុវត្ថិភាព',
        freeShipping: 'ការដឹកជញ្ជូនដោយឥតគិតថ្លៃ $50+',
        dayReturns: 'ការត្រឡប់ 30 ថ្ងៃ',
        securePayment: 'ការទូទាត់ប្រាក់ដោយសុវត្ថិភាព',
        copyright: '© 2024 AEON Online Cambodia. រក្សាសិទ្ធិទាំងអស់។',
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('EN');

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations[typeof language]] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};