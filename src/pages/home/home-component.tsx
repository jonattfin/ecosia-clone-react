import React from 'react';
import { InputGroup, Spinner, Intent, Button, Icon, SpinnerSize } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Link } from 'react-router-dom';

import { Counter } from '../../shared-components'
import Components from './components';
import Images from './images';

import styles from './styles.module.scss';

const HomeComponent = (props: any) => {
  const { actions, model = {}, language, counter, query, setQuery } = props;
  const { payload = {} } = model;
  const { data, searchInProgress } = payload;

  return (
    <div className={styles.home}>
      <section className={styles['search-section']}>
        <div>
          <img className={styles.logo} src={Images.logoImage} alt="logo" />
        </div>
        <div className={styles.counter}>
          <InputGroup
            className={styles['search-box']}
            placeholder={language['search-to-plant-trees']}
            large
            leftIcon={IconNames.SEARCH}
            onChange={(ev) => { setQuery(ev.target.value); }}
            onKeyDown={(ev) => { if (ev.keyCode === 13) { actions.search(query); } }}
          />
          {searchInProgress && <Spinner intent={Intent.PRIMARY} size={SpinnerSize.SMALL} />}
          <div className={styles.counter__wrapper}>
            {data}
            <h1>{language['the-search-engine']}</h1>
            <Counter counter={counter} />
            <div>&nbsp;</div>
          </div>
        </div>
      </section>
      <section className={styles['countries-section']}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles['above-title']}>
              {language['where-do-you-plant-trees']}
            </div>
            <div className={styles.title}>
              {language['we-plant-30-countries']}
            </div>
            <div className={styles.body}>
              <div className={styles['countries-grid']}>
                <div className={styles['grid-item']}>
                  <img className={styles.country} src={Images.brazilImage} alt="brazil" />
                </div>
                <div className={styles['grid-item']}>
                  <img className={styles.country} src={Images.burkinaFasoImage} alt="burkina faso" />
                </div>
                <div className={styles['grid-item']}>
                  <img className={styles.country} src={Images.indonesiaImage} alt="indonesia" />
                </div>
                <div className={styles['grid-item']}>
                  <div>
                    Brazil
                  </div>
                  <br />
                  <div>
                    {language['we-plant-in-brazil']}
                  </div>
                </div>
                <div className={styles['grid-item']}>
                  <div>
                    Burkina Faso
                  </div>
                  <br />
                  <div>
                    {language['we-plant-in-burkina-faso']}
                  </div>
                </div>
                <div className={styles['grid-item']}>
                  <div>
                    Indonesia
                  </div>
                  <br />
                  <div>
                    {language['we-plant-in-indonesia']}
                  </div>
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['map-section']}>
        <div className={styles['wrapper-image']}>
          <div className={styles['above-title']}>Trees planted by ecosia users</div>
          <div className={styles.title__kick}>{counter}</div>
          <div className={styles['facts-grid']}>
            <div className={styles['grid-item']}>
              <div className={styles['grid-item__title']}>15 Million</div>
              <div className={styles['grid-item__text']}>People using Ecosia</div>
            </div>
            <div className={styles['grid-item']}>
              <div className={styles['grid-item__title']}>500+</div>
              <div className={styles['grid-item__text']}>Native species</div>
            </div>
            <div className={styles['grid-item']}>
              <div className={styles['grid-item__title']}>30+</div>
              <div className={styles['grid-item__text']}>Countries</div>
            </div>
            <div className={styles['grid-item']}>
              <div className={styles['grid-item__title']}>60+</div>
              <div className={styles['grid-item__text']}>Active projects</div>
            </div>
          </div>
          <div>
            <div>&nbsp;</div>
            <div className={styles['report-link']}><Link to="#">Discover our projects <Icon icon="flows" intent={Intent.DANGER} /></Link></div>
          </div>
        </div>
      </section>
      <section className={styles['financial-reports-section']}>
        <div className={styles['container-wrapper']}>
          <div className={styles['reports-text']}>
            <div className={styles['above-title']}>Monthly financial reports </div>
            <div className={styles.title}>Our revenue in January 2022 </div>
            <div >
              Our monthly reports show how much ad revenue we made from your searches, how we spent it, and how many trees this helped us plant.
            </div>
          </div>
          <div className={styles['pie-container']}>
            <Components.PieComponent />
            <div>&nbsp;</div>
            <div className={styles['report-link']}><Link to="#">Explore our financial reports <Icon icon="flows" intent={Intent.DANGER} /></Link></div>
          </div>
        </div>
      </section>
      <section className={styles['why-choose-us-section']}>
        <div className={styles.wrapper}>
          <div className={styles['above-title']}>Why choose Ecosia? </div>
          <div className={styles.title}>We put people and planet before profit</div>
          <div>&nbsp;</div>
          <div className={styles['reasons-grid']}>
            <div className={styles['grid-item']}>
              <div>
                <img src={Images.profitsImage} alt="profits" />
              </div>
              <div className={styles['grid-item__title']}>
                We’re a not-for-profit business
              </div>
              <div>
                We dedicate 100% of our profits to climate action, with at least 80% financing tree-planting projects.
              </div>
            </div>
            <div className={styles['grid-item']}>
              <div>
                <img src={Images.privacyImage} alt="privacy" />
              </div>
              <div className={styles['grid-item__title']}>
                Ecosia is powered by 200% renewable energy
              </div>
              <div>
                Our solar panels produce twice the amount of energy needed to power all searches with renewables.
              </div>
            </div>
            <div className={styles['grid-item']}>
              <div>
                <img src={Images.worldImage} alt="world" />
              </div>
              <div className={styles['grid-item__title']}>
                We always put your privacy first
              </div>
              <div>
                We anonymize your searches and don’t create a profile of you. We’re interested in trees, not your data.
              </div>

            </div>
            <div className={styles['grid-item']}>
              <div>
                <img src={Images.coinImage} alt="coin" />
              </div>
              <div className={styles['grid-item__title']}>
                We are transparent about everything we do
              </div>
              <div>
                We publish detailed financial reports and frequent updates from our tree planting projects.
              </div>
            </div>
          </div>
          <div>
            <div>&nbsp;</div>
            <div className={styles['report-link']}><Link to="#">Other reasons... <Icon icon="flows" intent={Intent.DANGER} /></Link></div>
          </div>
        </div>

      </section>
      <section className={styles['join-section']}>
        <div className={styles['main-grid']}>
          <div className={styles['grid-item__title']}>Join 15 million people who already use Ecosia</div>
          <div className={styles['grid-item']}><Button intent={Intent.DANGER} large outlined onClick={() => {
            console.log("error will be thrown");
            throw new Error("You clicked on Share Ecosia")
          }
          }> Share Ecosia</Button></div>
        </div>
      </section>
    </div >
  )
}

export default HomeComponent;
