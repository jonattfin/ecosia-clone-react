import * as Images from './images';

export default function Component({ styles, language }) {
  return (
    <section className={styles['ecosia-for-mobile']}>
      <div className={styles.title}>
        Ecosia for Mobile
      </div>
      <div className={styles.subtitle}>
        Plant trees while searching the web with your mobile phone or tablet.
      </div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div >
        <img className={styles.logo} src={Images.AppStoreImage} alt={"app store"} />
        <img className={styles.logo} src={Images.PlayStoreImage} alt={"play store"} />
      </div>
    </section>
  )
}
