import React from 'react';
import { Button, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import images from './images';
import styles from './styles.module.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  return (
    <div className={styles.privacy}>
      <section className={styles['we-protect-privacy-section']}>
        <div className={styles.title}>
          We protect your privacy
        </div>
        <div className={styles.subtitle}>
          Forests need protecting and so does your privacy. <br />We make sure to do both.
        </div>
        <div>
          <Button icon={IconNames.ADD} intent={Intent.PRIMARY} large text={'Add Ecosia to Firefox'} />
        </div>
      </section>
      <section className={styles['statements-section']}>
        {getStatements().map(({ title, content, image }, index) => (
          <div key={`statement_${index}`} className={styles.row}>
            <img className={styles.image} src={image} alt="tldr" />
            <div>
              <div className={styles.title}>{title}</div>
              <div className={styles.content}>{content}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

function getStatements() {
  return [
    {
      title: 'We don’t store your searches permanently',
      content: 'We don’t create personal profiles of you based on your search history. We actually anonymize all searches within one week.',
      image: images.pantherImage,
    },
    {
      title: 'We don’t sell your data to advertisers',
      content: 'Many web services collect user data in order to sell it without asking your permission. We don’t sell your data or your searches to advertising companies.',
      image: images.treesImage,
    },
    {
      title: 'Your searches are encrypted',
      content: 'We protect your searches from potential eavesdroppers with a securely encrypted connection. This way we make sure that nobody between you and us can see your searches.',
      image: images.crowImage,
    },
    {
      title: 'We don’t use external tracking tools',
      content: 'Most websites use external tracking tools, like Google Analytics, to optimize their services. We don’t use such third party trackers, in order to prevent others from accessing your searches.',
      image: images.fishImage
    },
    {
      title: 'You can turn off all our tracking',
      content: 'We only collect a small amount of data to be able to improve our services. If you want to opt out of tracking, you can activate “Do Not Track” in your browser’s settings.',
      image: images.foxImage
    },
  ]
}
