
import { useState } from "react";
import { Button } from '@mui/material';

import styles from './styles.module.scss';

export default function Component() {
  const [play, setPlay] = useState(false);

  return (
    <section className={styles['meet-the-team-section']}>
      {!play && (
        <>
          <div className={styles.title}>Step inside!</div>
          <div className={styles.subtitle}>Meet the humans who make Ecosia and learn what it's like to work here.</div>
          <div>
            <Button variant="contained" onClick={() => setPlay(true)} >Play</Button>
          </div>
        </>
      )}
      {play && (
        <div className={styles['movie']}>
          <video className={styles['movie__wrapper']} controls autoPlay={true}>
            <source src="https://d3fme2ivr1xlgj.cloudfront.net/240719_Ecosia_hiringvideo_subbed_titled.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </section>
  )
}
