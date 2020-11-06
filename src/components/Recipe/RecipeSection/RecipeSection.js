import React from 'react';
import Ingredient from './Ingredient/Ingredient'
import styles from './RecipeSection.module.css';

const RecipeSection = ({ header, ingredients, description, multiplier}) => {
  console.log({ header, ingredients, description, multiplier})
  return (
    <section className={styles.section} >
      <h4 className={styles.section__header}>{header ? header : 'Ingredients:'}</h4>
      <ul className={styles.section__ul}>
        {ingredients ? ingredients.map(el => <Ingredient key={el} ingredient={el} multiplier={multiplier} />) : null}
      </ul>
      <section className={styles.section__description}>
        {description ? description.map(el => <p key={el}>{el}</p>) : null}
      </section>
    </section>
  )
}

export default RecipeSection
