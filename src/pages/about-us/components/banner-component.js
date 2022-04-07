import { Button } from '@mui/material';

import styles from './styles.module.scss';

export default function Component() {
  return (
    <section className={styles['everyone-power-section']}>
      <div className={styles.title}>We believe in everyone's power to do good</div>
      <div>
        <Button variant="contained">Add Ecosia to Firefox</Button>
      </div>
      <div></div>
    </section>
  )
}
