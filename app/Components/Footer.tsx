import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "../Contexts/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-6 sm:mb-0 text-center sm:text-left">
              <h3 className="text-xl font-bold mb-2">{t("footerTitle")}</h3>
              <p className="text-gray-400">{t("footerSubtitle")}</p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} {t("footerTitle")}.{" "}
                {t("allRights")}.
              </div>
            </div>
          </div>
        </div>
      </footer>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-gray-800 dark:bg-gray-700 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-200 shadow-lg border border-gray-300 dark:border-gray-700"
          aria-label="Scroll to top">
          <ArrowUp size={20} className="text-white" />
        </button>
      )}
    </>
  );
};

export default Footer;
