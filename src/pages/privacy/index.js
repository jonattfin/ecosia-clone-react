
import * as Components from './components';
import styles from './styles.module.scss';

export default function Component(props) {

  return (
    <div>
      <Components.ProtectPrivacyComponent {...{ styles, language: {} }} />
      <Components.StatementsComponent {...{ styles, language: {} }} />
    </div>
  );
}
