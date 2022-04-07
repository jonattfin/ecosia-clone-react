import { Link } from 'react-router-dom';

import * as Images from './images';

import styles from './styles.module.scss';

export default function Component() {
  return (
    <section className={styles['why-choose-us-section']}>
      <div className={styles.wrapper}>
        <div className={styles['above-title']}>Why choose Ecosia? </div>
        <div className={styles.title}>We put people and planet before profit</div>
        <div>&nbsp;</div>
        <div className={styles['reasons-grid']}>
          <div className={styles['grid-item']}>
            <div>
              <img src={Images.ProfitsImage} alt="profits" />
            </div>
            <div className={styles['grid-item__title']}>
              We’re a not-for-profit business
            </div>
            <div>
              We dedicate 100% of our profits to climate action, with at least 80% financing tree-planting projects.
            </div>
          </div>
          <div className={styles['grid-item']}>
            <div>
              <img src={Images.PrivacyImage} alt="privacy" />
            </div>
            <div className={styles['grid-item__title']}>
              Ecosia is powered by 200% renewable energy
            </div>
            <div>
              Our solar panels produce twice the amount of energy needed to power all searches with renewables.
            </div>
          </div>
          <div className={styles['grid-item']}>
            <div>
              <img src={Images.WorldImage} alt="world" />
            </div>
            <div className={styles['grid-item__title']}>
              We always put your privacy first
            </div>
            <div>
              We anonymize your searches and don’t create a profile of you. We’re interested in trees, not your data.
            </div>

          </div>
          <div className={styles['grid-item']}>
            <div>
              <img src={Images.CoinImage} alt="coin" />
            </div>
            <div className={styles['grid-item__title']}>
              We are transparent about everything we do
            </div>
            <div>
              We publish detailed financial reports and frequent updates from our tree planting projects.
            </div>
          </div>
        </div>
        <div>
          <div>&nbsp;</div>
          <div className={styles['report-link']}><Link to="#">Other reasons...</Link></div>
        </div>
      </div>
    </section>
  )
}
