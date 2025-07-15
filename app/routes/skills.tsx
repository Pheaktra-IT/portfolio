import type { Route } from "./+types/home";
import Skills from "../Pages/Skills";
import { LanguageProvider } from "~/Contexts/LanguageContext";
import Layout from "~/Components/Layout";
import { ThemeProvider } from "~/Contexts/ThemeContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function skillRouter() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <Skills />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}
