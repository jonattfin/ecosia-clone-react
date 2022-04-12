import { Button, Grid } from '@mui/material';
import styled from '@emotion/styled';

import { AboveTitle, Subtitle } from './styled-components';

const Separator = styled.div`
  padding: 1vh;
`;

export default function Component({ styles, language }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <AboveTitle>Plant trees while you search the web</AboveTitle>
        <Separator />
        <Subtitle>We use the profit we make from your searches to plant trees where they are needed most. </Subtitle>
        <Subtitle>Get the free browser extension and plant trees with every search.</Subtitle>
        <Separator />
        <div>
          <Button variant="contained">Add Ecosia to Firefox</Button>
        </div>
      </Grid>
    </Grid >
  )
}
