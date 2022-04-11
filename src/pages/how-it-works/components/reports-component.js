import { Button } from '@mui/material';

export default function Component({ styles, language }) {
  return (
    <section className={styles['reports-section']}>
      <div>
        <img src="https://infopages-prod-cdn.ecosia.org/assets/images/what/transperancy-blue-img-8408403664.svg" alt="transparency" />
      </div>
      <div className={styles.title}>
        We know trust has to be earned
      </div>
      <div className={styles['sub-title']}>
        That is why we publish our monthly financial reports and tree planting receipts. This way you can hold us accountable as we follow our journey to a reforested world.
      </div>
      <div className={styles['view-reports-btn']}>
        <Button variant="contained">View Reports</Button>
      </div>
    </section>
  )
}
