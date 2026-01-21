import {
  Facebook,
  Instagram,
  MessageCircle,
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Truck,
  RotateCcw,
  CreditCard
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('home'), href: "#" },
    { name: t('shop'), href: "#" },
    { name: t('categories'), href: "#" },
    { name: t('aboutUs'), href: "#" },
    { name: t('contactUs'), href: "#" },
  ];

  const customerService = [
    { name: t('helpCenter'), href: "#" },
    { name: t('faqs'), href: "#" },
    { name: t('shippingDelivery'), href: "#" },
    { name: t('returnsRefunds'), href: "#" },
    { name: t('privacyPolicy'), href: "#" },
    { name: t('termsConditions'), href: "#" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "TikTok", icon: MessageCircle, href: "#" },
    { name: "Telegram", icon: Send, href: "#" },
  ];

  const paymentMethods = [
    "Visa",
    "MasterCard",
    "PayPal",
    "ABA",
    "Wing",
  ];

  return (
    <footer className="bg-footer">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-footer-foreground">
                CUMT<span className="text-gradient">Store</span>
              </h2>
              <p className="text-footer-muted leading-relaxed max-w-md">
                {t('footerDesc')}
              </p>
              <p className="text-sm italic text-footer-muted/80">
                "Where Style Meets Substance"
              </p>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-footer-foreground">
                {t('followUs')}
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="social-icon"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-footer-foreground">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link inline-block text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-footer-foreground">
              {t('customerService')}
            </h4>
            <ul className="space-y-3">
              {customerService.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link inline-block text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-footer-foreground">
              {t('contactUs')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-footer-muted">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>123 Fashion Street,<br />Cambodia, NY 1234</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-footer-muted">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+1234567890" className="hover:text-footer-hover transition-colors">
                  +885 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-footer-muted">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:hello@luxestore.com" className="hover:text-footer-hover transition-colors">
                  Cumt@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-footer-muted">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Mon - Sat: 9AM - 8PM<br />Sunday: 10AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges & Payment Methods */}
        <div className="mt-16 pt-8 border-t border-footer-border">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="trust-badge">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>{t('secureCheckout')}</span>
              </div>
              <div className="trust-badge">
                <Truck className="w-5 h-5 text-primary" />
                <span>{t('freeShipping')}</span>
              </div>
              <div className="trust-badge">
                <RotateCcw className="w-5 h-5 text-primary" />
                <span>{t('dayReturns')}</span>
              </div>
              <div className="trust-badge">
                <CreditCard className="w-5 h-5 text-primary" />
                <span>{t('securePayment')}</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-wrap justify-center gap-3">
              {paymentMethods.map((method) => (
                <div key={method} className="payment-icon">
                  <span className="text-xs font-medium">{method}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-footer-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-footer-muted">
            <p>{t('© 2024 MopelSmosSne')}</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="hover:text-footer-hover transition-colors">{t('privacyPolicy')}</a>
              <a href="#" className="hover:text-footer-hover transition-colors">{t('termsConditions')}</a>
              <a href="#" className="hover:text-footer-hover transition-colors">{t('cookiePolicy')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
