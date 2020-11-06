import React from 'react';

import { useMyContext } from '../Reducer'
import Card from './Card/Card'
import styles from './RecipeList.module.css';

const RecipeList = () => {
  const context = useMyContext();
  const recipes = context.recipes;
  const cards = recipes ? recipes.map(item => <Card key={item.id} {...item} />) : null;

  return (
    <main className={styles.main}>
      <h1 className={styles.main__header}>Who wants some cake?</h1>
      {cards}
    </main>
  )
}

export default RecipeList;
