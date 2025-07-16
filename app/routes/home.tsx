import type { Route } from "./+types/home";

import Welcome from "../Pages/welcome";
import { LanguageProvider } from "~/Contexts/LanguageContext";
import { ThemeProvider } from "~/Contexts/ThemeContext"; // Add this import
import Layout from "~/Components/Layout";
import About from "~/Pages/About";
import Experience from "~/Pages/Experience";
import Skills from "~/Pages/Skills";
import Projects from "~/Pages/Projects";
import Contact from "~/Pages/Contact";

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <Welcome />
          <About/>
          <Skills/>
          <Projects/>
          <Experience/>
          <Contact/>
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}
