import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ title, pictureURL }) => (
  <>
    <Link to={`/recipe/${title}`}>
      <div className={styles.card}>
        <h2 className={styles.card__header}>{title}</h2>
        <img src={pictureURL} alt={title} className={styles.card__img}/>
      </div>
    </Link>
  </>
  );

export default Card;
