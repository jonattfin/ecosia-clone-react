import HomeComponent from './home-component';

import { withRouter } from '../../helpers';

export default () => <div></div>

export const HomePage = () => {
  const props = {
    language: {},
    counter: 100,
    query: 'hello world',
    setQuery: () => { },
    doSearch: () => { }
  };

  return withRouter(HomeComponent, props);
}
