import * as Images from './images';

import styles from './styles.module.scss';

export default function Component() {
  return (
    <section className={styles['brands-section']}>
      {getBrands().map((brand, index) => (<img key={`brand_image_${index}`} className={styles.image} src={brand} alt='tdlr'></img>))}
    </section>
  )
}


function getBrands() {
  const { UpWorthyImage, ScientificImage, GuardianImage, SalonImage, ForbesImage } = Images;
  return [UpWorthyImage, ScientificImage, GuardianImage, SalonImage, ForbesImage];
}
