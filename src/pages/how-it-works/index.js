import { Container } from '@mui/material';

import * as Components from './components';

export default function Component() {
  const props = { styles: {}, language: {} };
  return (
    <Container>
      <Components.PlantTreesComponent {...props} />
      <Components.BrandsComponent {...props} />
      <Components.HowItWorksComponent {...props} />
      <Components.GraphicsComponent {...props} />
      <Components.ReportsComponent {...props} />
    </Container>
  );
}
