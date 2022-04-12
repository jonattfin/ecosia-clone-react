import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import styled from '@emotion/styled'

import PieComponent from './pie';
import { AboveTitle, Subtitle } from './styled-components';

const PieContainer = styled.div`
  height: 20vh;
  width: 20vw;
`;

export default function Component({ language }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={6}>
        <AboveTitle>Monthly financial reports </AboveTitle>
        <Subtitle>Our revenue in January 2022 </Subtitle>
        <div>Our monthly reports show how much ad revenue we made from your searches, how we spent it, and how many trees this helped us plant.</div>
      </Grid>
      <Grid item xs={12} xl={6}>
        <PieContainer>
          <PieComponent />
        </PieContainer>
      </Grid>
      <Grid item xs={12} xl={12}>
        <Link to="#">Explore our financial reports...</Link>
      </Grid>
    </Grid>
  )
}
