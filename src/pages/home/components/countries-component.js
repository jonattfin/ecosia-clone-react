
import * as Images from './images';

export default function Component({ language, styles }) {
  return (
    <section className={styles['countries-section']}>
      <div className={styles['above-title']}>
        {language['where-do-you-plant-trees']}
      </div>
      <div className={styles.title}>
        {language['we-plant-30-countries']}
      </div>
      <div className={styles['countries-grid']}>
        <div className={styles['grid-item']}>
          <div><img className={styles.country} src={Images.BrazilImage} alt="brazil" /></div>
          <div className={styles['grid-item__title']}>Brazil</div>
          <div className={styles['grid-item__subtitle']}>
            {language['we-plant-in-brazil']}
          </div>
        </div>
        <div className={styles['grid-item']}>
          <img className={styles.country} src={Images.BurkinaFasoImage} alt="burkina faso" />
          <div className={styles['grid-item__title']}>Burkina Faso</div>
          <div className={styles['grid-item__subtitle']}>{language['we-plant-in-burkina-faso']}</div>
        </div>
        <div className={styles['grid-item']}>
          <img className={styles.country} src={Images.IndonesiaImage} alt="indonesia" />
          <div className={styles['grid-item__title']}>Indonesia</div>
          <div className={styles['grid-item__subtitle']}>{language['we-plant-in-indonesia']}</div>
        </div>
      </div>
    </section >
  )
}
