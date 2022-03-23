import React, { useState, useEffect } from 'react';
import { interval, tap } from 'rxjs';

import styles from './styles.module.scss';

const Counter = () => {
  const initialValue = 146000000;
  const [counter, setCounter] = useState(initialValue);
  
  useEffect(() => {
    const subscription = interval(1000)
      .pipe(tap(x => console.log(x)))
      .subscribe(value => setCounter(initialValue + value));
    return () => subscription.unsubscribe();
  }, []);

  const { showText = true, fontSize = '2.5em' } = {};

  return (
    <div className={styles.counter}>
      <div style={{ fontSize }} className={styles.counter__text}>
        {counter.toLocaleString()}
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

