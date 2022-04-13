import { Pagination, Stack } from '@mui/material';
import { useState } from 'react';

const defaultObject = {
  totalEstimatedMatches: 0,
  values: []
};

const pageSize = 10;

export default function Component({ resultsObject = defaultObject, styles }) {
  const [page, setPage] = useState(1);

  var data = showWindow(resultsObject.values, pageSize, page);
  const numberOfPages = parseInt(resultsObject.values.length / pageSize);

  const handleChange = (ev, value) => setPage(value);

  return (
    <div className={styles['search-list']}>
      <Stack spacing={2}>
        {data.map(({ url, snippet, name }, index) =>
          <div key={`index_${index}`}>
            <div>
              <a className={styles['title']} href={url} target="_blank" rel="noreferrer">{name}</a>
            </div>
            <div>
              <a className={styles['subtitle']} href={url} target="_blank" rel="noreferrer">{url}</a>
            </div>
            <div className={styles['snippet']}>
              {snippet}
            </div>
          </div>
        )}
      </Stack>
      <h5>{resultsObject.totalEstimatedMatches} results</h5>
      <div className={styles['pagination']}>
        <Pagination variant="outlined" color="primary" count={numberOfPages} page={page} onChange={handleChange} />
      </div>
    </div>
  )
}

function showWindow(data, pageSize, pageNumber = 1) {
  return data.filter((v, index) => {
    return index >= pageSize * (pageNumber - 1) && (index < pageSize * pageNumber);
  })
}
