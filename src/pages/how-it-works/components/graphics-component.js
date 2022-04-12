import { Grid } from '@mui/material';

export default function Component({ styles = {}, language }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} xl={12}>
        Over 146 million trees planted
      </Grid>
      <Grid item xs={12} xl={3}>
        <div className={styles.time}>{'December 2009'}</div>
        <div className={styles.subtitle}>{'1.1 sec'}</div>
        <hr className={styles.line} />
        <div className={styles.time}>{'to plant a tree'}</div>
      </Grid>
      <Grid item xs={12} xl={3}>
        <div className={styles.time}>{'over'}</div>
        <div className={styles.subtitle}>{'15 million'}</div>
        <hr className={styles.line} />
        <div className={styles.time}>{'active users'}</div>
      </Grid>
      <Grid item xs={12} xl={3}>
        <div className={styles.time}>{'over'}</div>
        <div className={styles.subtitle}>{'12,101,152'}</div>
        <hr className={styles.line} />
        <div className={styles.time}>{'EUR invested'}</div>
      </Grid>
      <Grid item xs={12} xl={3}>
        <div className={styles.time}>{'over'}</div>
        <div className={styles.subtitle}>{'9000'}</div>
        <hr className={styles.line} />
        <div className={styles.time}>{'planting sites'}</div>
      </Grid>
    </Grid>
  )
}
