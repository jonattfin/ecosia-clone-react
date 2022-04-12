import { Grid } from '@mui/material';
import styled from '@emotion/styled';

import * as Images from './images';
import { AboveTitle } from './styled-components';

const SpecialImage = styled.img`
  max-width: 5vw;
`;

export default function Component({ language }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <AboveTitle>How it works</AboveTitle>
      </Grid>
      <Grid item xs={12} xl={4}>
        <SpecialImage src={Images.EcosiaImage} alt='tdlr'></SpecialImage>
        <div >You search the web with Ecosia.</div>
      </Grid>
      <Grid item xs={12} xl={4}>
        <SpecialImage src={Images.AdsImage} alt='tdlr'></SpecialImage>
        <div >Search ads generate income for Ecosia.</div>
      </Grid>
      <Grid item xs={12} xl={4}>
        <SpecialImage src={Images.IncomeImage} alt='tdlr'></SpecialImage>
        <div >Ecosia uses this income to plant trees.</div>
      </Grid>
    </Grid>
  )
}
