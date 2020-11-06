import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ title, pictureURL }) => (
  <>
    <Link to={`/recipe/${title}`}>
      <article className={styles.card}>
        <img src={pictureURL} alt={title} className={styles.card__img}/>
        <h2 className={styles.card__header}>{title}</h2>
      </article>
    </Link>
  </>
  );

export default Card;
