import { Link } from 'react-router-dom';

import PieComponent from './pie';

export default function Component({ language, styles }) {
  return (
    <section className={styles['financial-reports-section']}>
      <div className={styles['container-wrapper']}>
        <div className={styles['reports-text']}>
          <div className={styles['above-title']}>Monthly financial reports </div>
          <div className={styles.title}>Our revenue in January 2022 </div>
          <div >
            Our monthly reports show how much ad revenue we made from your searches, how we spent it, and how many trees this helped us plant.
          </div>
        </div>
        <div className={styles['pie-container']}>
          <PieComponent />
          <div>&nbsp;</div>
          <div className={styles['report-link']}><Link to="#">Explore our financial reports...</Link></div>
        </div>
      </div>
    </section>
  )
}
