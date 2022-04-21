import AboutUsComponent from './about-us-component';
import * as Components from './components';

const commonProps = {
  language: {}
};

export default () => <div></div>

export const BannerComponent = () => {
  const props = {
    ...commonProps
  };
  return <Components.BannerComponent {...props} />
}

export const ContactUsComponent = () => {
  const props = {
    ...commonProps
  };
  return <Components.ContactUsComponent {...props} />
}
ContactUsComponent.parameters = {
  storyshots: { disable: true },
};

export const HireComponent = () => {
  const props = {
    ...commonProps
  };
  return <Components.HireComponent {...props} />
}

export const MeetTheTeamComponent = () => {
  const props = {
    ...commonProps
  };
  return <Components.MeetTheTeamComponent {...props} />
}

export const SocialBusinessComponent = () => {
  const props = {
    ...commonProps
  };
  return <Components.SocialBusinessComponent {...props} />
}

export const AboutUsPage = () => {
  const props = {
  };

  return <AboutUsComponent {...props} />;
}
AboutUsPage.parameters = {
  storyshots: { disable: true },
};
