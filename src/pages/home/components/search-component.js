import { FormControl, OutlinedInput, Grid } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useState } from 'react';
import styled from '@emotion/styled';

import * as Images from './images';

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* border: 1px solid red; */
  height: 100vh;
`;

const SearchControl = styled(FormControl)`
  width: 25vw;
  /* border: 1px solid blue; */

  @media (max-width: 1080px) {
    width: 75vw;
  }
`;

const LogoImage = styled.img`
  padding: 20px;
  width: 200px;
`;

const CounterDiv = styled.div`
  font-size: 4vh;
  color: teal;
`;

export default function Component({ onSearch, language, counter }) {
  const [query, setQuery] = useState('');
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <DivContainer>
          <div>
            <LogoImage src={Images.LogoImage} alt="logo" />
          </div>
          <div>
            <SearchControl variant="outlined">
              <OutlinedInput
                value={query}
                placeholder="Search the web to plant trees..."
                onChange={(ev) => { setQuery(ev.target.value); }}
                onKeyDown={ev => { if (ev.key === 'Enter') onSearch(query); }}
                endAdornment={<SearchIcon />}
              />
            </SearchControl>
          </div>
          <div>
            <h1>{language['the-search-engine']}</h1>
          </div>
          <CounterDiv>
            {counter.toLocaleString()}
          </CounterDiv>
          <div>
            Trees planted by Ecosia users.
          </div>
        </DivContainer>
      </Grid>
    </Grid>
  )
}
