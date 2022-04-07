import { Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { Search as SearchIcon, Photo as PhotoIcon, Newspaper as NewspaperIcon } from '@mui/icons-material';

import * as Components from './components';

import styles from './styles.module.scss';

export default function Component(props: any) {
  const { query, doSearch, resultsObject } = props;
  const [value] = useState(0);

  const handleChange = () => { }

  return (
    <div className={styles['search-page']}>
      <Components.Search {...{ query, doSearch, styles }} />
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<SearchIcon />} iconPosition="start" label="Web" />
          <Tab icon={<PhotoIcon />} iconPosition="start" label="Images" />
          <Tab icon={<NewspaperIcon />} iconPosition="start" label="News" />
        </Tabs>
      </Box>
      {value === 0 && <Components.SearchList {...{ resultsObject, styles }} />}
    </div>
  )
}
