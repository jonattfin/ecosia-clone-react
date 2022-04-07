import { Pagination, Stack } from '@mui/material';

const defaultObject = {
  webPages: {
    totalEstimatedMatches: 0,
    value: []
  }
};

export default function Component(props) {
  const { resultsObject = defaultObject, styles } = props;

  return (
    <div className={styles['search-list']}>
      <Stack spacing={2}>
        {resultsObject.webPages.value.map(({ url, snippet, name }, index) =>
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
      <h5>{resultsObject.webPages.totalEstimatedMatches} results</h5>
      <div className={styles['pagination']}><Pagination count={10} /></div>
    </div>
  )
}