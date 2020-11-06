import React from 'react';

import githubLogo from '../../assets/github-logo.png';
import disclamer from '../../assets/disclamer.json';
import copyRights from '../../assets/copy_rights.json';

import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.footer}>
    <p className={styles.footer__disclamer}>*{disclamer.disclamer}
      <a href={"http://" + disclamer.link}>{disclamer.link}</a>
    </p>
    <div className={styles.footer__div}>
      <a href="https://github.com/b-zuj">
        <img className={styles.div__img} src={githubLogo} alt="github logo" />
      </a>
      <p className={styles.div__disclamer}>{copyRights.copy_rights}</p>
    </div>
  </div>
);

export default Footer
