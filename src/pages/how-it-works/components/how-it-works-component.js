import * as Images from './images';

import styles from './styles.module.scss';

export default function Component() {
  return (
    <section className={styles['how_it_works_section']}>
      <div className={styles.header}>
        <div className={styles.title}>How it works</div>
      </div>
      <div className={styles.images}>
        {getImages().map((item, index) => (
          <div key={`image_${index}`}>
            <img className={styles.image} src={item.image} alt='tdlr'></img>
            <div className={styles.text}>{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function getImages() {
  const { EcosiaImage, AdsImage, IncomeImage } = Images;
  return [
    { image: EcosiaImage, text: 'You search the web with Ecosia.' },
    { image: AdsImage, text: 'Search ads generate income for Ecosia.' },
    { image: IncomeImage, text: 'Ecosia uses this income to plant trees.' },
  ];
}
