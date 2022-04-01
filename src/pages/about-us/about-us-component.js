import { useState } from "react";
import { TextField, Button, MenuItem } from '@mui/material';

import styles from './styles.module.scss';

const Component = () => {
  // const [message, setMessage] = useState('');
  // const [email, setEmail] = useState('');
  const [play, setPlay] = useState(false);

  return (
    <div className={styles['about-us']}>
      <section className={styles['everyone-power-section']}>
        <div className={styles.title}>We believe in everyone's power to do good</div>
        <div>
          <Button variant="contained">Add Ecosia to Firefox</Button>
        </div>
        <div></div>
      </section>
      <section className={styles['social-business-section']}>
        <div className={styles.title}>Ecosia is a social business founded in 2009 after a trip around the world</div>
        <div className={styles.column}>
          {getTimePeriods().map((period, index) => (
            <div key={`period_${index}`} className={styles.column__item}>
              <div className={styles.time}>{period.time}</div>
              <div className={styles.subtitle}>{period.title}</div>
              <hr className={styles.line} />
              <div>{period.content}</div>
            </div>
          ))}
        </div>
      </section>
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
      <section className={styles['hiring-section']}>
        <div className={styles.title}>We're hiring!</div>
        <div className={styles.subtitle}>Want to help change the world? Let's team up. Apply to help us build great products and services that can make the world a more sustainable place. We can't wait to hear from you.</div>
        <div>
          <Button variant="contained">See openings</Button>
        </div>
      </section>
      <section className={styles['contact-us-section']}>
        <div className={styles.title}>Contact us</div>
        <div className={styles.subtitle}>For questions about Ecosia check our FAQ first. <br />If you don't see what you are looking for, drop us a line!</div>
        <div className={styles.form}>
          <TextField variant="outlined" label="Message" multiline rows={5}></TextField>
          <TextField variant="outlined" label="E-mail" />
          <TextField variant="outlined" label="Subject" select>
            {getFilterOptions().map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="contained">Send</Button>
        </div>
      </section>
    </div>
  );
};

export default Component;

function getTimePeriods() {
  return [
    {
      time: 'December 2009',
      title: 'Ecosia is born',
      content: 'Christian founded Ecosia.org after a trip around the world helped him understand the problems of deforestation.'
    },
    {
      time: '2009 - 2011',
      title: 'People\'s choice',
      content: 'Ecosia won several awards for its clever concept and speedy growth in Europe and beyond.'
    },
    {
      time: 'April 2014',
      title: 'First German B Corp',
      content: 'Ecosia was the first German company to become a B Corporation thanks to its social business model.'
    },
    {
      time: 'April 2018',
      title: '25 million trees',
      content: 'A planting milestone! That same year, Ecosia also builds its own solar energy plant to power every search.'
    },
  ]
}

function getFilterOptions() {
  return ["Subject", "Technical problem", "General inquiry", "Press inquiry"];
}
