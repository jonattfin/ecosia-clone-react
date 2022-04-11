import React from 'react';
import renderer from 'react-test-renderer';

import * as Components from './components';

import styles from './styles.module.scss';

const language = {};

it('<Components.BrandsComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.BrandsComponent {...{ styles, language }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('<Components.GraphicsComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.GraphicsComponent {...{ styles, language }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('<Components.HowItWorksComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.HowItWorksComponent {...{ styles, language }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('<Components.PlantTreesComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.PlantTreesComponent {...{ styles, language }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('<Components.ReportsComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.ReportsComponent {...{ styles, language }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
