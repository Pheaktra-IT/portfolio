import type { Route } from "./+types/home";

import Welcome from "../Pages/welcome";
import { LanguageProvider } from "~/Contexts/LanguageContext";
import { ThemeProvider } from "~/Contexts/ThemeContext"; // Add this import
import Layout from "~/Components/Layout";

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <Welcome />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}
