import { FormControl, OutlinedInput } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useState } from 'react';

import * as SharedComponents from '../../../shared-components'
import * as Images from './images';


export default function Component({ onSearch, language, counter, styles }) {
  const [query, setQuery] = useState('');

  return (
    <section className={styles['search-section']}>
      <div>
        <img className={styles.logo} src={Images.LogoImage} alt="logo" />
      </div>
      <div className={styles.counter}>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" className={styles['search-box']}>
          <OutlinedInput
            value={query}
            placeholder="Search the web to plant trees..."
            onChange={(ev) => { setQuery(ev.target.value); }}
            onKeyDown={ev => { if (ev.key === 'Enter') onSearch(query); }}
            endAdornment={<SearchIcon />}
          />
        </FormControl>
        <div className={styles.counter__wrapper}>
          <h1>{language['the-search-engine']}</h1>
          <SharedComponents.Counter counter={counter} />
          <div>&nbsp;</div>
        </div>
      </div>
    </section>
  )
}
