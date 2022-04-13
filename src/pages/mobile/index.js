import { Fragment } from 'react';
import * as Components from './components';

export default function Component() {
  const props = { styles: {}, language: {} };
  return (
    <Fragment>
      <Components.BannerComponent {...props} />
    </Fragment>
  );
}
