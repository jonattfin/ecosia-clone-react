
import { Button } from '@mui/material';

import styles from './styles.module.scss';

export default function Component() {
  return (
    <section className={styles['hiring-section']}>
      <div className={styles.title}>We're hiring!</div>
      <div className={styles.subtitle}>Want to help change the world? Let's team up. Apply to help us build great products and services that can make the world a more sustainable place. We can't wait to hear from you.</div>
      <div>
        <Button variant="contained">See openings</Button>
      </div>
    </section>
  )
}
