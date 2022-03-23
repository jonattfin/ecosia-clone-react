import React, { useState } from 'react';
import { InputGroup, Button, Spinner, Intent, Card, Elevation } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import { Counter } from '../../components'

import images from './images';
import styles from './styles.module.scss';

const Home = (props) => {
  const [query, setQuery] = useState('');

  const { actions, model = {} } = props;
  const { payload = {} } = model;
  const { data, searchInProgress } = payload;

  return (
    <div className={styles.home}>
      <section className={styles.first_screen}>
        <div>
          <img className={styles.logo} src={images.logoImage} alt="logo" />
        </div>
        <div className={styles.counter}>
          <InputGroup
            className={styles.searchBox}
            placeholder="Search the web to plant trees..."
            large
            leftIcon={IconNames.SEARCH}
            onChange={(ev) => { setQuery(ev.target.value); }}
            onKeyDown={(ev) => { if (ev.keyCode === 13) { actions.search(query); } }}
          />
          <div>&nbsp;</div>
          {searchInProgress && <Spinner intent={Intent.PRIMARY} size={Spinner.SIZE_SMALL} />}
          <div className={styles.counter__wrapper}>
            {data}
            <Counter />
            <div>&nbsp;</div>
            <a href="#woman-with-crops">
              <Button icon={IconNames.ARROW_DOWN} intent={Intent.PRIMARY} large />
            </a>
          </div>
        </div>
        <div>
        </div>
        <div>
          <img className={styles.savanah} src={images.savanahImage} alt="savanah" />
        </div>
      </section>
      <section className={styles.second_screen} id="woman-with-crops">
        <div className={styles.row}>
          <div>
            <img className={styles.withCrops} src={images.womanWithCropsImage} alt="woman with crops" />
          </div>
          <div className={styles.column}>
            <div className={styles.title}>
              You search the web, <br />
              we plant trees
            </div>
            <div className={styles.body}>
              Ecosia is like any other search engine, with one major difference:<br />
              <b>we use our profits to plant trees.</b>
            </div>
            <div>&nbsp;</div>
            <div>
              <Button icon={IconNames.ADD} intent={Intent.PRIMARY} large text={'Add Ecosia to Firefox'} />
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.title}>
              We plant trees where <br /> they’re needed most
            </div>
            <div className={styles.body}>
              Our trees benefit people, the environment <br /> and local economies.
            </div>
          </div>
          <div>
            <img className={styles.worldMap} src={images.worldMapImage} alt="world map" />
          </div>
        </div>
      </section>
      <section className={styles.third_screen}>
        <div className={styles.title}>
          We stand for a better internet
        </div>
        <div className={styles.cards}>
          {getCards().map((card, index) => (
            <div className={styles.card_separator} key={`card_${index}`}>
              <Card interactive={true} elevation={Elevation.TWO}>
                <img className={styles.card_image} src={card.image} alt="logo" />
                <h4>{card.title}</h4>
                <p>{card.content}</p>
              </Card>
            </div>
          ))}
        </div>
        <div>
          <Button icon={IconNames.ADD} intent={Intent.PRIMARY} large text={'Add Ecosia to Firefox'} />
        </div>
      </section>
    </div >
  )
}

export default Home;

function getCards() {
  return [
    {
      url: '',
      title: 'Completely transparent',
      content: 'We publish our monthly financial reports, so you see exactly where the income from your searches goes.',
      image: images.transparencyImage
    },
    {
      url: '',
      title: 'More than Co2 neutral',
      content: 'Our servers run on 100% renewable energy, and every search request removes 1kg of CO from the atmosphere.',
      image: images.coNeutralImage
    },
    {
      url: '',
      title: 'Privacy friendly',
      content: 'We don’t sell your data to advertisers, have no third party trackers and anonymize all searches within one week.',
      image: images.privacyImage
    },
  ]
}
