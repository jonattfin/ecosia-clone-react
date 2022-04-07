import { withRouter } from '../../helpers';

import * as Components from './components';

export default () => <div></div>

export const PieComponent = () => {
  return (
    <div style={{ height: '40vh', width: '30vw' }}>
      <Components.PieComponent />
    </div>
  );
}

export const SearchComponent = () => {
  const props = {
    query: "",
    setQuery: () => { },
    doSearch: () => { },
    language: {},
    counter: 100
  };

  return <Components.SearchComponent {...props} />
}

export const CountriesComponent = () => {
  const props = {
    language: {}
  };

  return <Components.CountriesComponent {...props} />
}

export const MapComponent = () => {
  const props = {
    counter: 0
  };

  return withRouter(Components.MapComponent, props);
}

export const FinancialComponent = () => {
  const props = {
    language: {}
  };
  return withRouter(Components.FinancialComponent, props);
}

export const WhyChooseUsComponent = () => {
  const props = {
  };
  return withRouter(Components.WhyChooseUsComponent, props);
}

export const JoinUsComponent = () => {
  const props = {
  };
  return <Components.JoinUsComponent {...props} />
}
