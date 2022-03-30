
import Button from '@mui/material/Button';

import styles from './styles.module.scss';

const Footer = ({ showText = true }) => {
  return (
    <div className={styles.footer}>
      {showText && (
        <div>
          Follow our journey
        </div>
      )}
      <div>
        {getIcons().map((icon, index) => (
          <Button key={`button_${index}`}>
            <span class="material-icons">
              {icon}
            </span>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Footer;

function getIcons() {
  return ['assistant', 'storm', 'wb_twilight', 'home'];
}
