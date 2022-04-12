import { Button, Grid } from '@mui/material';

import { AboveTitle, Subtitle } from './styled-components';

export default function Component({ styles, language }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <div>
          <img src="https://infopages-prod-cdn.ecosia.org/assets/images/what/transperancy-blue-img-8408403664.svg" alt="transparency" />
        </div>
        <AboveTitle>
          We know trust has to be earned
        </AboveTitle>
        <Subtitle>
          That is why we publish our monthly financial reports and tree planting receipts. <br/> This way you can hold us accountable as we follow our journey to a reforested world.
        </Subtitle>
        <div>
          <Button variant="contained">View Reports</Button>
        </div>
      </Grid>
    </Grid>
  )
}
