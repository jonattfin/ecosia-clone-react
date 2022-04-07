import { Button } from '@mui/material';

import styles from './styles.module.scss';

export default function Component() {
  return (
    <section className={styles['plant-trees-section']}>
      <div className={styles.title}>Plant trees while you search the web</div>
      <div className={styles.separator}>&nbsp;</div>
      <div className={styles['sub-title']}>We use the profit we make from your searches to plant trees where they are needed most. <br />Get the free browser extension and plant trees with every search.</div>
      <div className={styles.separator}>&nbsp;</div>
      <div>
        <Button variant="contained">Add Ecosia to Firefox</Button>
      </div>
    </section>
  )
}
