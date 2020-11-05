import React from 'react';
import { Link } from 'react-router-dom';

import muffin from '../../assets/muffin_orange.jpg';

import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <img className={styles.header__logo} src={muffin} alt="muffin logo" />
      <h1 className={styles.header__header}>BasiuBakes</h1>
    </Link>
    <Link to="/about">
      <img className={styles.header__about} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScV6s6nq0mCKfy3cHSkQnBraKpfrZTcekJRQ&usqp=CAU" alt="about icon" />
    </Link>
  </header>
);

export default Header;
