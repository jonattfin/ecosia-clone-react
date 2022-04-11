import PrivacyComponent from './';
import * as Components from './components';
import styles from './styles.module.scss';

export default () => <div></div>

export const ProtectPrivacyComponent = () => {
  return <Components.ProtectPrivacyComponent {...{ styles }} />
}

export const StatementsComponent = () => {
  return <Components.StatementsComponent {...{ styles }} />
}


export const PrivacyPage = () => {
  const props = {
  };

  return <PrivacyComponent {...props} />;
}
