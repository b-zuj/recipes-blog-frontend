import React from 'react';

import githubLogo from '../../assets/github-logo.png';
import disclamer from '../../assets/disclamer.json';
import copyRights from '../../assets/copy_rights.json';

import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.footer}>
    {console.log(disclamer)}
    <a href="https://github.com/b-zuj">
      <img className={styles.footer__img} src={githubLogo} alt="github logo" />
    </a>
    <p className={styles.footer__disclamer}>*{disclamer.disclamer}
      <a href={"http://" + disclamer.link}>{disclamer.link}</a>
    </p>
    <p className={styles.footer__disclamer}>{copyRights.copy_rights}</p>
  </div>
);

export default Footer
