import React from "react";
import { Github, Linkedin, Mail, ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../Contexts/LanguageContext";


const Welcome: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

        {/* Subtle Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-400 dark:bg-blue-300 rotate-45 opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-400 dark:bg-purple-300 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-pink-400 dark:bg-pink-300 rotate-45 opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-indigo-400 dark:bg-indigo-300 opacity-20"></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto relative z-10">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white dark:border-gray-700 shadow-xl overflow-hidden bg-white dark:bg-800">
              JD
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight drop-shadow-sm">
            {t("heroTitle")
              .split(" ")
              .map((word, index) => (
                <span key={index}>
                  {index === 1 ? (
                    <span className="text-blue-600 dark:text-blue-400">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                  {index < t("heroTitle").split(" ").length - 1 && " "}
                </span>
              ))}
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 drop-shadow-sm">
            {t("heroSubtitle")}
          </p>

          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            {t("heroDescription")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 backdrop-blur-sm inline-flex items-center justify-center space-x-2">
              <span>{t("viewWork")}</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:border-gray-400 dark:hover:border-gray-500 hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 backdrop-blur-sm inline-flex items-center justify-center space-x-2">
              <span>{t("getInTouch")}</span>
              <Mail size={18} />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="#"
              className="p-3 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-3 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-3 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
              <Mail size={20} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <Link
            to="/about"
            className="animate-bounce text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 inline-flex items-center space-x-2">
            <span className="text-sm">{t("learnMore")}</span>
            <ArrowDown size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
