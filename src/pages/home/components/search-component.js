import { FormControl, OutlinedInput } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

import * as SharedComponents from '../../../shared-components'
import * as Images from './images';

import styles from './styles.module.scss';

export default function Component(props) {
  const { query, setQuery, doSearch, language, counter } = props;

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
            onKeyDown={ev => { if (ev.key === 'Enter') doSearch(query); }}
            endAdornment={<SearchIcon />}
          />
        </FormControl>
        <div>
          {query}
        </div>
        <div className={styles.counter__wrapper}>
          <h1>{language['the-search-engine']}</h1>
          <SharedComponents.Counter counter={counter} />
          <div>&nbsp;</div>
        </div>
      </div>
    </section>
  )
}
