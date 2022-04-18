import { Box, Tabs, Tab, CircularProgress } from '@mui/material';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { Search as SearchIcon, Photo as PhotoIcon, Newspaper as NewspaperIcon } from '@mui/icons-material';

import * as Components from './components';

import styles from './styles.module.scss';

export default function Component(props: any) {
  const { query, doSearch, resultsObject, progress } = props;
  const [value] = useState(0);

  const handleChange = () => { }

  return (
    <Grid container>
      <Grid item xl={4}>

      </Grid>
      <Grid item xs={12} xl={4}>
        <section className={styles['search-page']}>
          <Components.Search {...{ query, doSearch, styles }} />
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab icon={<SearchIcon />} iconPosition="start" label="Web" />
              <Tab icon={<PhotoIcon />} iconPosition="start" label="Images" />
              <Tab icon={<NewspaperIcon />} iconPosition="start" label="News" />
            </Tabs>
          </Box>
          {showResults(value, progress, resultsObject, styles)}
        </section>
      </Grid>
      <Grid item xl={4}></Grid>
    </Grid>
  )
}

function showResults(value: any, progress: any, resultsObject: any, styles: any) {
  if (progress)
    return <div className={styles.progress}><CircularProgress /></div>;

  if (value === 0)
    return <Components.SearchList {...{ resultsObject, styles }} />
}
