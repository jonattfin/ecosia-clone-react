import React from 'react';

import { Counter, Footer, Links, Header } from '.';
import { withRouter } from '../helpers';

export default () => <div></div>

const headerProps = {
  model: {
    setLanguage: (option) => console.log(option),
    setTheme: (option) => console.log(option),
  }
};

export const EcosiaHeader = () => withRouter(Header, headerProps);

export const EcosiaCounter = () => <Counter counter={100}></Counter>;

export const EcosiaFooter = () => withRouter(Footer);

export const EcosiaLinks = () => withRouter(Links);
