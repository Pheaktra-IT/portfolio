import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../Contexts/ThemeContext";
import { useLanguage } from "../Contexts/LanguageContext";
import Loading from "./Loading";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // All hooks must be called before any return!
  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // Now you can conditionally return
  if (loading) {
    return <Loading />;
  }

  const navItems = [
    { id: "/", label: t("home") },
    { id: "/about", label: t("about") },
    { id: "/skills", label: t("skills") },
    { id: "/projects", label: t("projects") },
    { id: "/experience", label: t("experience") },
    { id: "/contact", label: t("contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-sm border-b border-gray-100 dark:border-gray-800 dark:text-white text-gray-900"
          : "bg-transparent"
      }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-gray-900 dark:text-white uppercase">
            {t("heroTitle")}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.id)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}>
                {item.label}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Globe size={18} />
              <span className="text-sm font-medium">
                {language === "en" ? "KM" : "EN"}
              </span>
            </button>

            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
              {t("resume")}
            </a>
          </nav>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Language Toggle Mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Globe size={16} />
              <span className="text-xs font-medium">
                {language === "en" ? "KM" : "EN"}
              </span>
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-lg">
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive(item.id)
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}>
                  {item.label}
                </Link>
              ))}
              <a
                href="#"
                className="block w-full bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 mt-4 text-center">
                {t("resume")}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
