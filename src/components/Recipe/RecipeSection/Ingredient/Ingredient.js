import React from 'react';

const Ingredient = ({ ingredient, multiplier }) => {
  const regex = /^[\d.]+/g;
  let value = Number(ingredient.match(regex));
  const description = ingredient.replace(`${value}`,'')
  
  return (
    <>
      <li>{`${multiplier ? value = (value * multiplier).toFixed(1) : value}${description}`}</li>
    </>
  )
};

export default Ingredient;
