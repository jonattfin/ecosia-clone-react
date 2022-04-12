import { Grid } from '@mui/material';
import styled from '@emotion/styled';

import * as Images from './images';

const BrandImage = styled.img`
  width: 100px;
`;

export default function Component({ language }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        {getBrands().map((brand, index) => (<BrandImage key={`brand_image_${index}`} src={brand} alt='tdlr'></BrandImage>))}
      </Grid>
    </Grid>
  )
}

function getBrands() {
  const { UpWorthyImage, ScientificImage, GuardianImage, SalonImage, ForbesImage } = Images;
  return [UpWorthyImage, ScientificImage, GuardianImage, SalonImage, ForbesImage];
}
