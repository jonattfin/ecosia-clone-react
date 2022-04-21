import React from 'react';
import { action } from '@storybook/addon-actions';

import { Footer, Links, Header } from '.';
import { withRouter } from '../helpers';

export default () => <div></div>

export const EcosiaHeader = () => {
  const props = {
    language: 0,
    theme: 0,
    onLanguageChange: action('onLanguageChange'),
    onThemeChange: action('onThemeChange')
  }
  return withRouter(Header, props)
};
EcosiaHeader.parameters = {
  storyshots: { disable: true },
};

export const EcosiaFooter = () => withRouter(Footer);

export const EcosiaLinks = () => withRouter(Links);
EcosiaLinks.parameters = {
  storyshots: { disable: true },
};

