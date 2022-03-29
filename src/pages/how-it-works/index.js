import React, { useState } from 'react';
import { Button, Intent, InputGroup, ControlGroup } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import styles from './styles.module.scss';
import images from './images';

const Component = () => {
  const [email, setEmail] = useState('');

  return (
    <div className={styles['how-it-works']}>
      <section className={styles['plant-trees-section']}>
        <div className={styles.title}>Plant trees while you search the web</div>
        <div className={styles.separator}>&nbsp;</div>
        <div className={styles['sub-title']}>We use the profit we make from your searches to plant trees where they are needed most. <br />Get the free browser extension and plant trees with every search.</div>
        <div className={styles.separator}>&nbsp;</div>
        <div>
          <Button icon={IconNames.ADD} intent={Intent.PRIMARY} large text={'Add Ecosia to Firefox'} />
        </div>
      </section>
      <section className={styles['brands-section']}>
        {getBrands().map((brand, index) => (<img key={`brand_image_${index}`} className={styles.image} src={brand} alt='tdlr'></img>))}
      </section>
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
      <section className={styles['graphics-section']}>
        <div className={styles.title}>Over 57 million trees planted</div>
        <div className={styles.column}>
          {getTimePeriods().map((period, index) => (
            <div key={`period_${index}`} className={styles.column__item}>
              <div className={styles.time}>{period.time}</div>
              <div className={styles.subtitle}>{period.title}</div>
              <hr className={styles.line} />
              <div className={styles.time}>{period.content}</div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles['journey-section']}>
        <div className={styles.title}>
          Follow our journey to one billion trees
        </div>
        <div className={styles['sub-title']}>
          Subscribe to our newsletter for regular updates, and connect with us on social media.
        </div>
        <div>
          {/* <Footer showText={false} backgroundColor="teal" /> */}
        </div>
        <div>
          <ControlGroup>
            <InputGroup
              placeholder="Your e-mail"
              large
              onChange={(ev) => { setEmail(ev.target.value); }}
            />
            <div className={styles.separator}>&nbsp;</div>
            <Button intent={Intent.PRIMARY} large text={'Get updates'} onClick={() => alert(email)} />
          </ControlGroup>
        </div>
        <div className={styles.separator}>&nbsp;</div>
        <div>
          <img className={styles['savanah-image']} src={images.savanahImage} alt={'savanah'} />
        </div>
      </section>
      <section>
        {/* <Links /> */}
      </section>
      <section>
        {/* <Footer /> */}
      </section>
    </div >
  );
}

export default Component;

function getTimePeriods() {
  return [
    {
      time: 'December 2009',
      title: '1.1 sec',
      content: 'to plant a tree'
    },
    {
      time: 'over',
      title: '7 million',
      content: 'active users'
    },
    {
      time: 'now',
      title: <div>&nbsp;</div>,
      content: 'trees total'
    },
    {
      time: 'over',
      title: '9,101,152',
      content: 'EUR invested'
    },
    {
      time: '',
      title: '0.2 euro',
      content: 'per tree'
    },
  ]
}

function getBrands() {
  const { upWorthyImage, scientificImage, guardianImage, salonImage, forbesImage } = images;
  return [upWorthyImage, scientificImage, guardianImage, salonImage, forbesImage];
}

function getImages() {
  const { ecosiaImage, adsImage, incomeImage } = images;
  return [
    { image: ecosiaImage, text: 'You search the web with Ecosia.' },
    { image: adsImage, text: 'Search ads generate income for Ecosia.' },
    { image: incomeImage, text: 'Ecosia uses this income to plant trees.' },
  ];
}
