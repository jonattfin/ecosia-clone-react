import { Grid } from '@mui/material';

import { Subtitle } from './styled-components';

export default function Component({ language }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <Subtitle>Join 15 million people who already use Ecosia</Subtitle>
      </Grid>
    </Grid>
  )
}
