import MobileComponent from './';
import * as Components from './components';

export default () => <div></div>

export const BannerComponent = () => {
  const props = { language: {} };
  return <Components.BannerComponent {...props} />
}

export const MobilePage = () => {
  const props = {
  };

  return <MobileComponent {...props} />;
}
