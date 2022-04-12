import { FormControl, OutlinedInput, Grid } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useState } from 'react';

import * as SharedComponents from '../../../shared-components'
import * as Images from './images';

export default function Component({ onSearch, language, counter }) {
  const [query, setQuery] = useState('');
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        <img src={Images.LogoImage} alt="logo" />
      </Grid>
      <Grid item xs={12} xl={12}>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            value={query}
            placeholder="Search the web to plant trees..."
            onChange={(ev) => { setQuery(ev.target.value); }}
            onKeyDown={ev => { if (ev.key === 'Enter') onSearch(query); }}
            endAdornment={<SearchIcon />}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} xl={12}>
        <h1>{language['the-search-engine']}</h1>
        <SharedComponents.Counter counter={counter} />
        <div>&nbsp;</div>
      </Grid>
    </Grid>
  )
}
