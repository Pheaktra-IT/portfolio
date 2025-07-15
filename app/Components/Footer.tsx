import React from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "../Contexts/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-6 sm:mb-0 text-center sm:text-left">
            <h3 className="text-xl font-bold mb-2">{t("footerTitle")}</h3>
            <p className="text-gray-400">{t("footerSubtitle")}</p>
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {t("footerTitle")}. {t("allRights")}.
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 bg-gray-800 dark:bg-gray-700 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200">
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
