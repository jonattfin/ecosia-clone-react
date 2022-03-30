
import styles from './styles.module.scss';
import images from './images';

const Links = () => {
  return (
    <section className={styles.links}>
      <div className={styles.column}>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div><img className={styles.image} src={images.corporationImage} alt="b corporation"></img></div>
      </div>
      <div className={styles.column}>
        <div className={styles.title}>SITEMAP</div>
        <div><a href="#id">News</a></div>
        <div><a href="#id">How Ecosia works</a></div>
        <div><a href="#id">About us</a></div>
        <div><a href="#id">Mobile app</a></div>
        <div><a href="#id">Privacy</a></div>
        <div><a href="#id">Settings</a></div>
      </div>
      <div className={styles.column}>
        <div className={styles.title}>Resources</div>
        <div><a href="#id">FAQ</a></div>
        <div><a href="#id">Advertise on Ecosia</a></div>
        <div><a href="#id">Financial reports</a></div>
        <div><a href="#id">Blog</a></div>
        <div><a href="#id">Shop</a></div>
        <div><a href="#id">Press</a></div>
        <div><a href="#id">Jobs</a></div>
      </div>
      <div className={styles.column__imprint}>
        <div className={styles.title}>Imprint</div>
        <div>
          Ecosia GmbH
          Schinkestraße 9
          12047 Berlin, Germany

          Chairman Christian Kroll

          VAT ID: DE273999090

          Commercial Register:

          HRB 170873, Amtsgericht
          Charlottenburg
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.title}>Apps</div>
        <div><img src={images.appStoreImage} alt="app store"></img></div>
        <div><img src={images.playStoreImage} alt="play store"></img></div>
      </div>
    </section>
  )
}

export default Links;
