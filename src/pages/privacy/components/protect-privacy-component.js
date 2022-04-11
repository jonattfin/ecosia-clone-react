import styles from '../styles.module.scss';

export default function Component() {
  return (
    <section className={styles['we-protect-privacy-section']}>
      <div className={styles.title}>
        We protect your privacy
      </div>
      <div className={styles['subtitle']}>
        Forests need protecting and so does your privacy. <br />We make sure to do both.
      </div>
      <div>
        <a href="#statements">
          <span className="material-icons">arrow_downward</span>
        </a>
      </div>
    </section>
  )
}
