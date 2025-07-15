import Layout from "../Components/Layout";
import { LanguageProvider } from "../Contexts/LanguageContext";
import { ThemeProvider } from "../Contexts/ThemeContext";
import Projects from "../Pages/Projects";

export default function projectsRoute() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <Projects />
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}
