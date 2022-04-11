
import * as Components from './components';
import styles from './styles.module.scss';

export default function Component() {
  const commonProps = { language: {}, styles };

  return (
    <div>
      <Components.BannerComponent {...commonProps} />
      <Components.SocialBusinessComponent {...commonProps} />
      <Components.MeetTheTeamComponent {...commonProps} />
      <Components.HireComponent {...commonProps} />
      <Components.ContactUsComponent {...commonProps} />
    </div>
  );
};

