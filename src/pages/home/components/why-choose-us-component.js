import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';

import { AboveTitle, Subtitle } from './styled-components';
import * as Images from './images';

const GridItemTitle = styled.div`
  font-size: larger;
`;

export default function Component({ language }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <AboveTitle>Why choose Ecosia?</AboveTitle>
        <Subtitle>We put people and planet before profit</Subtitle>
      </Grid>
      <Grid item xs={12} xl={6}>
        <div>
          <img src={Images.ProfitsImage} alt="profits" />
        </div>
        <GridItemTitle>
          We’re a not-for-profit business
        </GridItemTitle>
        <div>
          We dedicate 100% of our profits to climate action, with at least 80% financing tree-planting projects.
        </div>
      </Grid>
      <Grid item xs={12} xl={6}>
        <div>
          <img src={Images.PrivacyImage} alt="privacy" />
        </div>
        <GridItemTitle>
          Ecosia is powered by 200% renewable energy
        </GridItemTitle>
        <div>
          Our solar panels produce twice the amount of energy needed to power all searches with renewables.
        </div>
      </Grid>
      <Grid item xs={12} xl={6}>
        <div>
          <img src={Images.WorldImage} alt="world" />
        </div>
        <GridItemTitle>
          We always put your privacy first
        </GridItemTitle>
        <div>
          We anonymize your searches and don’t create a profile of you. We’re interested in trees, not your data.
        </div>
      </Grid>
      <Grid item xs={12} xl={6}>
        <div>
          <img src={Images.CoinImage} alt="coin" />
        </div>
        <GridItemTitle>
          We are transparent about everything we do
        </GridItemTitle>
        <div>
          We publish detailed financial reports and frequent updates from our tree planting projects.
        </div>
      </Grid>
      <Grid item xs={12} xl={12}>
        <Link to="#">Other reasons...</Link>
      </Grid>
    </Grid>
  )
}
