
import { Fragment } from 'react';
import * as Components from './components';

export default function Component(props) {

  return (
    <Fragment>
      <Components.ProtectPrivacyComponent {...{ language: {} }} />
    </Fragment>
  );
}
