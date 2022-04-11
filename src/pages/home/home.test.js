import React from 'react';
import renderer from 'react-test-renderer';

import * as Components from './components';
import styles from './styles.module.scss';
import { withRouter } from '../../helpers';

import { getLanguage } from './languages';
import { Languages } from '../../language';

const language = getLanguage(Languages.En)

it('<Components.CountriesComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.CountriesComponent {...{ styles, language }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// it('<Components.FinancialComponent/> renders correctly', () => {
//   const tree = renderer
//     .create(<Components.FinancialComponent {...{ styles }} />)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

it('<Components.JoinUsComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.JoinUsComponent {...{ styles }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('<Components.MapComponent/> renders correctly', () => {
  const tree = renderer
    .create(withRouter(Components.MapComponent, { styles, language }))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// it('<Components.PieComponent/> renders correctly', () => {
//   const tree = renderer
//     .create(<Components.PieComponent {...{ styles }} />)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

it('<Components.SearchComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.SearchComponent {... { styles, language }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('<Components.WhyChooseUsComponentw/> renders correctly', () => {
  const tree = renderer
    .create(withRouter(Components.WhyChooseUsComponent, {...{ styles }}))
    .toJSON();
  expect(tree).toMatchSnapshot();
});

