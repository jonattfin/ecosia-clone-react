import { Grid } from '@mui/material';
import styled from '@emotion/styled';

import * as Components from './components';

const AliceBlueGrid = styled(Grid)`
  background-color: aliceblue;
`;

export default function Component() {
  const props = { styles: {}, language: {} };
  return (
    <Grid container>
      {/* Plant trees section */}
      <AliceBlueGrid item xl={4}>
        &nbsp;
      </AliceBlueGrid>
      <AliceBlueGrid item  xs={12} xl={4}>
        <Components.PlantTreesComponent {...props} />
      </AliceBlueGrid>
      <AliceBlueGrid item xl={4}>
        &nbsp;
      </AliceBlueGrid>
      {/* Plant trees section */}


      {/* Brands section */}
      <Grid item xs={12} xl={12}>
        <Components.BrandsComponent {...props} />
      </Grid>
      {/* Brands section */}

      {/* How it works section */}
      <Grid item xl={4}>
        &nbsp;
      </Grid>
      <Grid item xs={12} xl={4}>
        <Components.HowItWorksComponent {...props} />
      </Grid>
      <Grid item xl={4}>
        &nbsp;
      </Grid>
      {/* How it works section */}

      {/* Graphics section */}
      <AliceBlueGrid item xl={4}>
        &nbsp;
      </AliceBlueGrid>
      <AliceBlueGrid item xs={12} xl={4}>
        <Components.GraphicsComponent {...props} />
      </AliceBlueGrid>
      <AliceBlueGrid item xl={4}>
        &nbsp;
      </AliceBlueGrid>
      {/* Graphics section */}

      {/* Reports section */}
      <Grid item xl={4}>
        &nbsp;
      </Grid>
      <Grid item xs={12} xl={4}>
        <Components.ReportsComponent {...props} />
      </Grid>
      <Grid item xl={4}>
        &nbsp;
      </Grid>
      {/* Reports section */}
    </Grid>
  );
}
