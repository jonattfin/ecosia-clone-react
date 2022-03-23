import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes, Outlet } from "react-router-dom";
import { Navbar, Alignment, Button } from '@blueprintjs/core';

import './App.css';
import styles from './styles.module.scss';

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

const Home = lazy(() => import('./pages/home'));
const AboutUs = lazy(() => import('./pages/aboutUs'));
const HowItWorks = lazy(() => import('./pages/howItWorks'));
const Mobile = lazy(() => import('./pages/mobile'));
const Privacy = lazy(() => import('./pages/privacy'));

const Layout = () => {
  return (
    <>
      <div className={styles.app}>
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
            <Button text="Home" icon="document" intent="primary"/>
            <Button minimal icon="code" text="About us" />
            <Button minimal icon="build" text="About us" ></Button>
            <Button minimal icon="draw" text="How it works" />
            <Button minimal icon="download" text="Mobile" />
            <Button minimal icon="endorsed" text="Privacy" />
          </Navbar.Group>
        </Navbar>
        <Outlet />
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
