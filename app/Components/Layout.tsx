import React from "react";
import { ThemeProvider } from "../Contexts/ThemeContext";
import { LanguageProvider } from "../Contexts/LanguageContext";
import Header from "../Components/Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Layout;
