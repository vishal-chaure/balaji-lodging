
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-background border-t border-border py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
