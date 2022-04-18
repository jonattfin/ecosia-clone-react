import React, { Suspense, lazy, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, Outlet } from "react-router-dom";
import { Container } from '@mui/material';

import { Footer, Links, Header } from './shared-components';
import { Languages, LanguageContext } from './language';
import { Themes, ThemeContext } from './theme';
import { CounterContext } from './counter';

const Home = lazy(() => import('./pages/home'));
const AboutUs = lazy(() => import('./pages/about-us'));
const HowItWorks = lazy(() => import('./pages/how-it-works'));
const Mobile = lazy(() => import('./pages/mobile'));
const Privacy = lazy(() => import('./pages/privacy'));
const Search = lazy(() => import('./pages/search'));

const Layout = () => {
  const [language, setLanguage] = useState(Languages.En);
  const [theme, setTheme] = useState(Themes.Light);
  const [queryCounter] = useState(100);

  const props = {
    language,
    onLanguageChange: setLanguage,
    theme,
    onThemeChange: setTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      <LanguageContext.Provider value={language}>
        <CounterContext.Provider value={queryCounter}>
          <header>
            <Header {...props} />
          </header>
          <main>
            <Outlet />
          </main>
          <Container>
            <section>
              <Links />
            </section>
            <footer>
              <Footer />
            </footer>
          </Container>
        </CounterContext.Provider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  )
};

export default function App() {
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
            <Route path="/search/:query" element={<Search />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
