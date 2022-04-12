import { Grid } from '@mui/material';

import * as Images from './images';
import { AboveTitle, Subtitle } from './styled-components';

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
        <div>Brazil</div>
        <div>{language['we-plant-in-brazil']}</div>
      </Grid>
      <Grid item xs={12} xl={4}>
        <img src={Images.BurkinaFasoImage} alt="burkina faso" />
        <div>Burkina Faso</div>
        <div>{language['we-plant-in-burkina-faso']}</div>
      </Grid>
      <Grid item xs={12} xl={4}>
        <img src={Images.IndonesiaImage} alt="indonesia" />
        <div>Indonesia</div>
        <div>{language['we-plant-in-indonesia']}</div>
      </Grid>
    </Grid>
  )
}
