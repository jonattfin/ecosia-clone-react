
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Button, Intent } from "@blueprintjs/core";

import styles from './styles.module.scss';

const Footer = ({ showText = true, backgroundColor }) => {
  return (
    <div className={styles.footer}>
      {showText && (
        <div>
          Follow our journey
      </div>
      )}
      <div>
        {getIcons().map((icon, index) => (
          <Button style={{ backgroundColor }} key={`button_${index}`} className={styles.button} intent={Intent.PRIMARY}>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Footer;

function getIcons() {
  return [faFacebook, faTwitter, faYoutube, faInstagram, faLinkedin];
}
