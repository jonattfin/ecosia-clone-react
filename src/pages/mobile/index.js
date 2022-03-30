
import styles from './styles.module.scss';
import Images from './images';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className={styles.mobile}>
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
          <img className={styles.logo} src={Images.appStoreImage} alt={"app store"} />
          <img className={styles.logo} src={Images.playStoreImage} alt={"play store"} />
        </div>
      </section>
    </div>
  );
}
