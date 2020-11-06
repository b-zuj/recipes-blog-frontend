import React from 'react';
import Ingredient from './Ingredient/Ingredient'
import styles from './RecipeSection.module.css';

const RecipeSection = ({ header, ingredients, description, multiplier}) => {
  console.log({ header, ingredients, description, multiplier})
  return (
    <section>
      <h4 className={styles.recipe__ingredientsHeader}>{header ? header : 'Ingredients:'}</h4>
      <ul className={styles.recipe__ul}>
        {ingredients ? ingredients.map(el => <Ingredient key={el} ingredient={el} multiplier={multiplier} />) : null}
      </ul>
      <section>
        {description ? description.map(el => <p key={el}>{el}</p>) : null}
      </section>
    </section>
  )
}

export default RecipeSection
