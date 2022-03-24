import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes, Outlet } from "react-router-dom";

import './App.css';
import styles from './styles.module.scss';

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Footer, Links, Header } from './shared-components';

const Home = lazy(() => import('./pages/home'));
const AboutUs = lazy(() => import('./pages/about-us'));
const HowItWorks = lazy(() => import('./pages/how-it-works'));
const Mobile = lazy(() => import('./pages/mobile'));
const Privacy = lazy(() => import('./pages/privacy'));

const Layout = () => {
  return (
    <>
      <div className={styles.app}>
        <section>
          <Header/>
        </section>
        <section>
          <Outlet />
        </section>
        <section>
          <Links />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  )
};

class App extends React.Component {
  render() {
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
}

export default App;
