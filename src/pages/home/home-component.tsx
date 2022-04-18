import { Grid } from '@mui/material';
import styled from '@emotion/styled';

import * as Components from './components';

const AliceBlueGrid = styled(Grid)`
  background-color: aliceblue;
`;

export default function Component(props: any) {
  const { counter, onSearch, language } = props;
  const commonProps = { language };

  return (
    <Grid container>
      {/* Search section */}
      <Grid item xl={4}>
        &nbsp;
      </Grid>
      <Grid item xs={12} xl={4}>
        <Components.SearchComponent {...{ counter, onSearch }} {...commonProps} />
      </Grid>
      <Grid item xl={4}>
        &nbsp;
      </Grid>
      {/* Search section */}

      {/* Countries section */}
      <AliceBlueGrid item xl={4}>
        &nbsp;
      </AliceBlueGrid>
      <AliceBlueGrid item xs={12} xl={4}>
        <Components.CountriesComponent {...commonProps} />
      </AliceBlueGrid>
      <AliceBlueGrid item xl={4}>
        &nbsp;
      </AliceBlueGrid>
      {/* Countries section */}

      {/* Map section */}
      <Grid item xl={4}>
        &nbsp;
      </Grid>
      <Grid item xs={12} xl={4}>
        <Components.MapComponent {...{ counter }} {...commonProps} />
      </Grid>
      <Grid item xl={4}>
        &nbsp;
      </Grid>
      {/* Map section  */}

      {/* Financial section */}
      <AliceBlueGrid item xl={4}>
        &nbsp;
      </AliceBlueGrid>
      <AliceBlueGrid item xl={4}>
        <Components.FinancialComponent {...commonProps} />
      </AliceBlueGrid>
      <AliceBlueGrid item xl={4}>
        &nbsp;
      </AliceBlueGrid>
      {/* Financial section */}

      {/* Why choose us section */}
      <Grid item xl={4}>
        &nbsp;
      </Grid>
      <Grid item xl={4}>
        <Components.WhyChooseUsComponent {...commonProps} />
      </Grid>
      <Grid item xl={4}>
        &nbsp;
      </Grid>
      {/* Why choose us section */}
      <Grid item xs={12} xl={12}>
        <section>
          <Components.JoinUsComponent {...commonProps} />
        </section>
      </Grid>
    </Grid >
  )
}
