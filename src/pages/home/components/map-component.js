import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';

import { AboveTitle, TitleKick } from './styled-components';

const ItemTitle = styled.div`
  border: 1px solid blue;
  font-size: x-large;
`;

const ItemText = styled.div`
  /* border: 1px solid red; */
`;

export default function Component({ counter, language }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <AboveTitle>Trees planted by ecosia users</AboveTitle>
        <TitleKick>{counter}</TitleKick>
      </Grid>
      <Grid item xs={12} xl={3}>
        <ItemTitle>15 Million</ItemTitle>
        <ItemText>People using Ecosia</ItemText>
      </Grid>
      <Grid item xs={12} xl={3}>
        <ItemTitle>500+</ItemTitle>
        <ItemText>Native species</ItemText>
      </Grid>
      <Grid item xs={12} xl={3}>
        <ItemTitle>30+</ItemTitle>
        <ItemText>Countries</ItemText>
      </Grid>
      <Grid item xs={12} xl={3}>
        <ItemTitle>60+</ItemTitle>
        <ItemText>Active projects</ItemText>
      </Grid>
    </Grid>

  )
}
