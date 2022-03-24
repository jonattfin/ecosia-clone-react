
import styles from './styles.module.scss';

const Counter = ({ counter = 0 } = {}) => {

  const { showText = true, fontSize = '4em' } = {};

  return (
    <div className={styles.counter}>
      <div style={{ fontSize }} className={styles.counter__text}>
        {counter}
      </div>
      {
        showText && (
          <div>
            Trees planted by Ecosia users
          </div>
        )
      }
    </div >
  );
}

export default Counter;

