import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export default function Component({ counter }) {
  return (
    <section className={styles['map-section']}>
      <div className={styles['wrapper-image']}>
        <div className={styles['above-title']}>Trees planted by ecosia users</div>
        <div className={styles.title__kick}>{counter}</div>
        <div className={styles['facts-grid']}>
          <div className={styles['grid-item']}>
            <div className={styles['grid-item__title']}>15 Million</div>
            <div className={styles['grid-item__text']}>People using Ecosia</div>
          </div>
          <div className={styles['grid-item']}>
            <div className={styles['grid-item__title']}>500+</div>
            <div className={styles['grid-item__text']}>Native species</div>
          </div>
          <div className={styles['grid-item']}>
            <div className={styles['grid-item__title']}>30+</div>
            <div className={styles['grid-item__text']}>Countries</div>
          </div>
          <div className={styles['grid-item']}>
            <div className={styles['grid-item__title']}>60+</div>
            <div className={styles['grid-item__text']}>Active projects</div>
          </div>
        </div>
      </div>
      <div className={styles['report-link']}><Link to="#">Discover our projects...</Link></div>
    </section>
  )
}
