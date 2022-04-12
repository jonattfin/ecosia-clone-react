import { Fragment } from 'react';

import * as Components from './components';

export default function Component() {
  const props = { styles: {}, language: {} };
  return (
    <Fragment>
      <Components.PlantTreesComponent {...props} />
      <Components.BrandsComponent {...props} />
      <Components.HowItWorksComponent {...props} />
      <Components.GraphicsComponent {...props} />
      <Components.ReportsComponent {...props} />
    </Fragment>
  );
}
