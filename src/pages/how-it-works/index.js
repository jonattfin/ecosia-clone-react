import Button from '@mui/material/Button';

import styles from './styles.module.scss';
import images from './images';

const Component = () => {
  return (
    <div className={styles['how-it-works']}>
      <section className={styles['plant-trees-section']}>
        <div className={styles.title}>Plant trees while you search the web</div>
        <div className={styles.separator}>&nbsp;</div>
        <div className={styles['sub-title']}>We use the profit we make from your searches to plant trees where they are needed most. <br />Get the free browser extension and plant trees with every search.</div>
        <div className={styles.separator}>&nbsp;</div>
        <div>
          <Button variant="contained">Add Ecosia to Firefox</Button>
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
        <div className={styles.title}>Over 146 million trees planted</div>
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
      <section className={styles['reports-section']}>
        <div>
          <img src="https://infopages-prod-cdn.ecosia.org/assets/images/what/transperancy-blue-img-8408403664.svg" alt="transparency" />
        </div>
        <div className={styles.title}>
          We know trust has to be earned
        </div>
        <div className={styles['sub-title']}>
          That is why we publish our monthly financial reports and tree planting receipts. This way you can hold us accountable as we follow our journey to a reforested world.
        </div>
        <div className={styles['view-reports-btn']}>
          <Button variant="contained">View Reports</Button>
        </div>
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
      title: '15 million',
      content: 'active users'
    },
    {
      time: 'now',
      title: <div>{146000000}</div>,
      content: 'trees total'
    },
    {
      time: 'over',
      title: '12,101,152',
      content: 'EUR invested'
    },
    {
      time: 'over',
      title: '9000',
      content: 'planting sites'
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
