import { MapPin, Phone, Mail, Facebook, Instagram, Building2, Link } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white mt-16 shadow-2xl">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info - Left */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Building2 className="h-8 w-8 text-purple-300" />
              {t('footerCompanyName')}
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {t('footerDescription')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1CPj4ifakf/"
                className="bg-purple-600/20 p-3 rounded-full hover:bg-purple-600 hover:scale-110 transition-all duration-300 group"
              >
                <Facebook className="h-6 w-6 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="bg-purple-600/20 p-3 rounded-full hover:bg-purple-600 hover:scale-110 transition-all duration-300 group"
              >
                <Instagram className="h-6 w-6 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Contact Us - Center */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold flex items-center gap-3">
              <Phone className="h-6 w-6 text-purple-300" />
              {t('contactUs')}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 mt-1 flex-shrink-0 text-purple-300" />
                <p className="text-slate-300">
                  {t('footerAddress')}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 flex-shrink-0 text-purple-300" />
                <p className="text-slate-300">{t('footerPhone')}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 flex-shrink-0 text-purple-300" />
                <p className="text-slate-300">{t('footerEmail')}</p>
              </div>
            </div>
          </div>

          {/* Quick Links - Right */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold flex items-center gap-3">
              <Link className="h-6 w-6 text-purple-300" />
              {t('quickLinks')}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-300 hover:text-purple-300 hover:underline transition-all duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-300 rounded-full"></span>
                  {t('aboutUs')}
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-purple-300 hover:underline transition-all duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-300 rounded-full"></span>
                  {t('deliveryInfo')}
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-purple-300 hover:underline transition-all duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-300 rounded-full"></span>
                  {t('privacyPolicy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-purple-300 hover:underline transition-all duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-300 rounded-full"></span>
                  {t('termsConditions')}
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-purple-300 hover:underline transition-all duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-300 rounded-full"></span>
                  {t('faqs')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">{t('MopelSmosSne')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
