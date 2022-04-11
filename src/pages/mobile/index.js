import * as Components from './components';
import styles from './styles.module.scss';

export default function Component() {
  const props = { styles, language: {} };
  return (
    <div>
      <Components.BannerComponent {...props} />
    </div>
  );
}
