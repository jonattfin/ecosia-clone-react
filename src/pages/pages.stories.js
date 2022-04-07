import React from 'react';

import Home from './home';
import AboutUs from './about-us';
import HowItWorks from './how-it-works';
import Mobile from './mobile';
import Privacy from './privacy';

import { withRouter } from '../helpers';

export default () => <div></div>

export const HomePage = () => withRouter(Home);
export const AboutUsPage = () => withRouter(AboutUs)
export const HowItWorksPage = () => withRouter(HowItWorks)
export const MobilePage = () => withRouter(Mobile);
export const PrivacyPage = () => withRouter(Privacy);


