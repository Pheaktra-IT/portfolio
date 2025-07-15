import type { Route } from "./+types/home";

import Experience from "../Pages/Experience";
import { LanguageProvider } from "~/Contexts/LanguageContext";
import { ThemeProvider } from "~/Contexts/ThemeContext"; // Add this import
import Layout from "~/Components/Layout";

export default function experienceRoute() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <Experience />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}
