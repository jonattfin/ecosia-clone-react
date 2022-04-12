
import { Fragment } from 'react';
import * as Components from './components';

export default function Component() {
  const commonProps = { language: {}, styles: {} };

  return (
    <Fragment>
      <Components.BannerComponent {...commonProps} />
      <Components.SocialBusinessComponent {...commonProps} />
      <Components.MeetTheTeamComponent {...commonProps} />
      <Components.HireComponent {...commonProps} />
      <Components.ContactUsComponent {...commonProps} />
    </Fragment>
  );
};

