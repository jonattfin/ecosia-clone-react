import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes, Link, Outlet } from "react-router-dom";

import './App.css';

// import "@blueprintjs/core/lib/css/blueprint.css";
// import "@blueprintjs/icons/lib/css/blueprint-icons.css";

const Home = lazy(() => import('./pages/home'));
const AboutUs = lazy(() => import('./pages/aboutUs'));
const HowItWorks = lazy(() => import('./pages/howItWorks'));
const Mobile = lazy(() => import('./pages/mobile'));
const Privacy = lazy(() => import('./pages/privacy'));

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/how-it-works">How it works</Link>
          </li>
          <li>
            <Link to="/mobile">Mobile</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
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
