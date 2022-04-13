import PrivacyComponent from './';
import * as Components from './components';

export default () => <div></div>

export const ProtectPrivacyComponent = () => {
  return <Components.ProtectPrivacyComponent {...{  }} />
}


export const PrivacyPage = () => {
  const props = {
  };

  return <PrivacyComponent {...props} />;
}
