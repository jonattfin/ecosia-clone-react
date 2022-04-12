import styled from '@emotion/styled';
import { Grid } from '@mui/material';

import * as Images from './images';
import { AboveTitle, Subtitle } from './styled-components';

const CountryNameDiv = styled.div`
  padding: 1%;
  border-left: 5px solid teal;
  text-transform: uppercase;
`;

const CountryTextDiv = styled.div`
  padding-top: 2%;
`;

export default function Component({ language }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <AboveTitle>
          {language['where-do-you-plant-trees']}
        </AboveTitle>
        <Subtitle>
          {language['we-plant-30-countries']}
        </Subtitle>
      </Grid>
      <Grid item xs={12} xl={4}>
        <img src={Images.BrazilImage} alt="brazil" />
        <CountryNameDiv>Brazil</CountryNameDiv>
        <CountryTextDiv>{language['we-plant-in-brazil']}</CountryTextDiv>
      </Grid>
      <Grid item xs={12} xl={4}>
        <img src={Images.BurkinaFasoImage} alt="burkina faso" />
        <CountryNameDiv>Burkina Faso</CountryNameDiv>
        <CountryTextDiv>{language['we-plant-in-burkina-faso']}</CountryTextDiv>
      </Grid>
      <Grid item xs={12} xl={4}>
        <img src={Images.IndonesiaImage} alt="indonesia" />
        <CountryNameDiv>Indonesia</CountryNameDiv>
        <CountryTextDiv>{language['we-plant-in-indonesia']}</CountryTextDiv>
      </Grid>
      <Grid item>
        &nbsp;
      </Grid>
    </Grid>
  )
}
