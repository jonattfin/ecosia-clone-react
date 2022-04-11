import React from 'react';
import renderer from 'react-test-renderer';

import * as Components from './components';
import styles from './styles.module.scss';

it('<Components.BannerComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.BannerComponent {...{ styles }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// it('<Components.ContactUsComponent/> renders correctly', () => {
//   const tree = renderer
//     .create(<Components.ContactUsComponent {...{ styles }} />)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

it('<Components.HireComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.HireComponent {...{ styles }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('<Components.MeetTheTeamComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.MeetTheTeamComponent {...{ styles }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('<Components.SocialBusinessComponent/> renders correctly', () => {
  const tree = renderer
    .create(<Components.SocialBusinessComponent {...{ styles }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


