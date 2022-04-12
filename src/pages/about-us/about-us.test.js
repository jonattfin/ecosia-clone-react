import React from 'react';
import renderer from 'react-test-renderer';

import * as Components from './components';

it('<Components.BannerComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.BannerComponent {...{  }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// it('<Components.ContactUsComponent/> renders correctly', () => {
//   const tree = renderer
//     .create(<Components.ContactUsComponent {...{  }} />)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

it('<Components.HireComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.HireComponent {...{  }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('<Components.MeetTheTeamComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.MeetTheTeamComponent {...{  }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('<Components.SocialBusinessComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.SocialBusinessComponent {...{  }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


