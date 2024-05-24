import "./i18n"; // import i18n configuration
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AnimatePresence } from "framer-motion";
import AppRoutes from "./AppRoutes";
import { LanguageProvider } from "@appSharedComponents/language/language-context";
import { ThemeProvider } from "@shadcnComponents/theme-provider";
import { useScrollToTop } from "./shared/hooks";

function App() {
  // const { t } = useTranslation();

  useScrollToTop();

  return (
    <div>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <LanguageProvider>
          {/* <Header /> */}
          {/* <Container>
            <div className={styles.welcome}>
              <h1 className={styles.title}>{t("WELCOME_TO_OUR_NEW_PROJECT")}</h1>
              <h2 className={styles.subTitle}>{import.meta.env.VITE_APP_TITLE} 🥳</h2>
              <h3>MODE: {import.meta.env.VITE_APP_MODE}</h3>
            </div>
            <section className={styles.apiArea}></section>
          </Container> */}
          <AnimatePresence>
            <AppRoutes />
          </AnimatePresence>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
