import React, { Suspense, lazy, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, Outlet } from "react-router-dom";

import { Footer, Links, Header } from './shared-components';
import { Languages, LanguageContext } from './language';
import { Themes, ThemeContext } from './theme';

import styles from './styles.module.scss';

const Home = lazy(() => import('./pages/home'));
const AboutUs = lazy(() => import('./pages/about-us'));
const HowItWorks = lazy(() => import('./pages/how-it-works'));
const Mobile = lazy(() => import('./pages/mobile'));
const Privacy = lazy(() => import('./pages/privacy'));

const Layout = () => {
  const [language, setLanguage] = useState(Languages.En);
  const [theme, setTheme] = useState(Themes.Light);


  const props = {
    model: {
      payload: {
        numberOfTrees: 0,
      },
      language, setLanguage,
      theme, setTheme,
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      <LanguageContext.Provider value={language}>
        <div className={styles.layout}>
          <section>
            <Header {...props} />
          </section>
          <section>
            <Outlet/>
          </section>
          <section>
            <Links />
          </section>
          <section>
            <Footer />
          </section>
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  )
};

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/privacy" element={<Privacy />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
