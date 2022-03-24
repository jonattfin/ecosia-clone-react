import React, { useState, useEffect } from 'react';
import { InputGroup, Spinner, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { interval, tap } from 'rxjs';

import { Counter } from '../../components'
import PieReport from './pie';

import images from './images';
import styles from './styles.module.scss';

const Home = (props) => {

  const initialValue = 146000000;
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    const subscription = interval(1000)
      .pipe(tap(x => console.log(x)))
      .subscribe(value => setCounter((initialValue + value).toLocaleString()));
    return () => subscription.unsubscribe();
  }, []);

  const [query, setQuery] = useState('');

  const { actions, model = {} } = props;
  const { payload = {} } = model;
  const { data, searchInProgress } = payload;

  return (
    <div className={styles.home}>
      <section className={styles.search_section}>
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
          {searchInProgress && <Spinner intent={Intent.PRIMARY} size={Spinner.SIZE_SMALL} />}
          <div className={styles.counter__wrapper}>
            {data}
            <h1>The search engine that plants trees.</h1>
            <Counter counter={counter} />
            <div>&nbsp;</div>
          </div>
        </div>
      </section>
      <section className={styles.countries_section}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.above_title}>
              Where are your trees being planted?
            </div>
            <div className={styles.title}>
              We plant in 30+ countries with local organizations
            </div>
            <div className={styles.body}>
              <div className={styles.countries_grid}>
                <div className={styles.grid_item}>
                  <img className={styles.country} src={images.brazilImage} alt="brazil" />
                </div>
                <div className={styles.grid_item}>
                  <img className={styles.country} src={images.burkinaFasoImage} alt="burkina faso" />
                </div>
                <div className={styles.grid_item}>
                  <img className={styles.country} src={images.indonesiaImage} alt="indonesia" />
                </div>
                <div className={styles.grid_item}>
                  <div>
                    Brazil
                  </div>
                  <br />
                  <div>
                    Your trees in Brazil protect thousands of endangered plants and animals.
                  </div>
                </div>
                <div className={styles.grid_item}>
                  <div>
                    Burkina Faso
                  </div>
                  <br />
                  <div>
                    In Indonesia, your searches bring back forests on former palm oil plantations while creating alternative sources of income.
                  </div>
                </div>
                <div className={styles.grid_item}>
                  <div>
                    Indonesia
                  </div>
                  <br />
                  <div>
                    In Indonesia, your searches bring back forests on former palm oil plantations while creating alternative sources of income.
                  </div>
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.map_section}>
        <div className={styles.wrapper_image}>
          <div className={styles.above_title}>Trees planted by ecosia users</div>
          <div className={styles.title__kick}>{counter}</div>
          <div className={styles.facts_grid}>
            <div className={styles.grid_item}>
              <div className={styles.grid_item__title}>15 Million</div>
              <div className={styles.grid_item__text}>People using Ecosia</div>
            </div>
            <div className={styles.grid_item}>
              <div className={styles.grid_item__title}>500+</div>
              <div className={styles.grid_item__text}>Native species</div>
            </div>
            <div className={styles.grid_item}>
              <div className={styles.grid_item__title}>30+</div>
              <div className={styles.grid_item__text}>Countries</div>
            </div>
            <div className={styles.grid_item}>
              <div className={styles.grid_item__title}>60+</div>
              <div className={styles.grid_item__text}>Active projects</div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.financial_reports}>
        <div className={styles.reports_text}>
          <div className={styles.above_title}>Monthly financial reports </div>
          <div className={styles.title}>Our revenue in January 2022 </div>
          <div >
            Our monthly reports show how much ad revenue we made from your searches, how we spent it, and how many trees this helped us plant.
          </div>
        </div>
        <div className={styles.pie_container}>
          <PieReport />
        </div>
      </section>
      <section className={styles.why_choose_us}>
        <div>
          <div className={styles.above_title}>Why choose Ecosia? </div>
          <div className={styles.title}>We put people and planet before profit</div>
          <div className={styles.reasons_grid}>
            <div className={styles.grid_item}>
              <div>
                <img src={images.profitsImage } alt="profits" />
              </div>
              <div className={styles.grid_item__title}>
                We’re a not-for-profit business
              </div>
              <div>
                We dedicate 100% of our profits to climate action, with at least 80% financing tree-planting projects.
              </div>
            </div>
            <div className={styles.grid_item}>
              <div>
                <img src={images.privacyImage} alt="privacy" />
              </div>
              <div className={styles.grid_item__title}>
                Ecosia is powered by 200% renewable energy
              </div>
              <div>
                Our solar panels produce twice the amount of energy needed to power all searches with renewables.
              </div>
            </div>
            <div className={styles.grid_item}>
              <div>
                <img src={images.worldImage} alt="world" />
              </div>
              <div className={styles.grid_item__title}>
                We always put your privacy first
              </div>
              <div>
                We anonymize your searches and don’t create a profile of you. We’re interested in trees, not your data.
              </div>

            </div>
            <div className={styles.grid_item}>
              <div>
                <img src={images.coinImage} alt="coin" />
              </div>
              <div className={styles.grid_item__title}>
                We are transparent about everything we do
              </div>
              <div>
                We publish detailed financial reports and frequent updates from our tree planting projects.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  )
}

export default Home;

