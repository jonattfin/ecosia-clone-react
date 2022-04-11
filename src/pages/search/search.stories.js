import { action } from '@storybook/addon-actions';
import { range } from 'lodash-es';

import SearchComponent from './search-component';

export default () => <div></div>

export const SearchPage = () => {

  const values = range(10).map(item => {
    return { url: `url${item}`, snippet: `snippet${item}`, name: `name${item}` };
  });

  const props = {
    query: 'hello world',
    doSearch: action('doSearch'),
    resultsObject: {
      values,
      totalEstimatedMatches: values.length,
    }
  };

  return <SearchComponent {...props} />;
}
