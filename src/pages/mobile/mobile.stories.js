import MobileComponent from './';
import * as Components from './components';
import styles from './styles.module.scss';

export default () => <div></div>

export const BannerComponent = () => {
  const props = {styles, language: {}};
  return <Components.BannerComponent {...props}/>
}

export const MobilePage = () => {
  const props = {
  };

  return <MobileComponent {...props}/>;
}
