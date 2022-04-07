import { FormControl, OutlinedInput, Stack } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useState } from 'react';

import * as Images from '../images';

export default function Component(props: any) {
  const { doSearch, styles } = props;
  const [query, setQuery] = useState(props.query);

  return (
    <Stack direction="row" spacing={2}>
      <img className={styles.logo} src={Images.LogoImage} alt="logo" />
      <FormControl size="small" variant="outlined">
        <OutlinedInput
          value={query}
          onChange={ev => { setQuery(ev.target.value); }}
          onKeyDown={ev => { if (ev.key === 'Enter') doSearch(query); }}
          endAdornment={<SearchIcon />}
        />
      </FormControl>
    </Stack>
  )
}
