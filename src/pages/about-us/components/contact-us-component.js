import { TextField, Button, MenuItem } from '@mui/material';

import styles from './styles.module.scss';

export default function Component() {
  return (
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
  )
}

function getFilterOptions() {
  return ["Subject", "Technical problem", "General inquiry", "Press inquiry"];
}
