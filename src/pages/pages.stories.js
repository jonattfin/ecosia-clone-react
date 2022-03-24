import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import Home from './home';
import AboutUs from './about-us';
import HowItWorks from './how-it-works';
import Mobile from './mobile';
import Privacy from './privacy';

export default () => <div></div>

export const HomePage = () => <Router><Home/></Router>;

export const AboutUsPage = () => <AboutUs/>;

export const HowItWorksPage = () => <HowItWorks/>;

export const MobilePage = () => <Mobile/>;

export const PrivacyPage = () => <Privacy/>;
