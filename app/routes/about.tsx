import type { Route } from "./+types/home";
import About from "../Pages/About";
import { LanguageProvider } from "~/Contexts/LanguageContext";
import Layout from "~/Components/Layout";
import { ThemeProvider } from "~/Contexts/ThemeContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function AboutRoute() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <About />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}
