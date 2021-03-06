import React, { useState, useEffect } from 'react';

import { useMyContext } from '../Reducer';
import Form from './Form/Form';
import RecipeSection from './RecipeSection/RecipeSection';
import styles from './Recipe.module.css';

const Recipe = () => {
  const [multiplier, setMultiplier] = useState(1)
  const context = useMyContext();
  const recipes = context.recipes;
  const title = window.location.pathname.replace('/recipe/', '').replaceAll('%20',' ');
  const currentRecipe = recipes ? recipes.find(item => item.title === title) : null;
  
  const parseByLineBreak = string => string ? string.split(/\n/) : null;
  const calulateSurface = size => Math.PI * (size/2) * (size/2);

  const ingredients1List = parseByLineBreak(currentRecipe.ingredients1);
  const ingredients2List = parseByLineBreak(currentRecipe.ingredients2);
  const description1List = parseByLineBreak(currentRecipe.directions1);
  const description2List = parseByLineBreak(currentRecipe.directions2);
  
  const calculateMultiplier = desiredSize => {
    const multiplier = calulateSurface(desiredSize)/calulateSurface(currentRecipe['form-size']);
    setMultiplier(multiplier)
  };

  useEffect(() => {
    console.log('useEffect');
  },[multiplier]);

  const sizeForm = currentRecipe['form-shape'] === 'round' ? (
      <section className={styles.recipe__sizeSection}>
        <h4 className={styles.sizeSection__header}>This recipe is meant for {currentRecipe['form-size']} size springform.</h4>
        <Form callback={calculateMultiplier} />
      </section>
    ) : null
  
  return (
    <article className={styles.recipe}>
      <header>
        <img src={currentRecipe.pictureURL} alt={currentRecipe.title} className={styles.recipe__img} />
        <h2 className={styles.recipe__header}>{currentRecipe.title}</h2>
        {sizeForm}
      </header>
      <main className={styles.recipe__main} >
        <RecipeSection header={currentRecipe.header1} ingredients={ingredients1List} description={description1List} multiplier={multiplier}/>
        {currentRecipe.header2 || description2List 
          ? <RecipeSection header={currentRecipe.header2} ingredients={ingredients2List} description={description2List} multiplier={multiplier}/> 
          : null }
      </main>
      <footer className={styles.recipe__footer}>
        <p>{currentRecipe.disclamer}</p>
      </footer>
    </article>
  )
}

export default Recipe;
