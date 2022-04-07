import { action } from '@storybook/addon-actions';

import HomeComponent from './home-component';

import { withRouter } from '../../helpers';

export default () => <div></div>

export const HomePage = () => {
  const props = {
    language: {},
    counter: 100,
    onSearch: action('onSearch')
  };

  return withRouter(HomeComponent, props);
}
