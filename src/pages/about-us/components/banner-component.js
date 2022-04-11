import { Button } from '@mui/material';

export default function Component({ language, styles }) {
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
