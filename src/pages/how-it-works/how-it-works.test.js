import React from 'react';
import renderer from 'react-test-renderer';

import * as Components from './components';

const language = {};

it('<Components.BrandsComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.BrandsComponent {...{ language }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('<Components.GraphicsComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.GraphicsComponent {...{ language }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('<Components.HowItWorksComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.HowItWorksComponent {...{ language }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('<Components.PlantTreesComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.PlantTreesComponent {...{ language }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('<Components.ReportsComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.ReportsComponent {...{ language }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
