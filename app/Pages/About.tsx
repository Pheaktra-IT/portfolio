import React from "react";
import { useLanguage } from "../Contexts/LanguageContext";

const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { number: "50+", label: t("projects") },
    { number: "5+", label: t("years") },
    { number: "30+", label: t("clients") },
    { number: "15+", label: t("technologies") },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("aboutTitle")}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("aboutSubtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t("aboutHeading")}
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>{t("aboutText1")}</p>
              <p>{t("aboutText2")}</p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
