import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
// import { appReducer } from '../Reducer'

import styles from './RecipeList.module.css';

const Context = React.createContext();

const appReducer = (action, state) => {
  console.log("action in appreducer", action)
  switch (action.type) {
    case 'add': {
      console.log('in reducer')
      return [ 
        ...state,
        {
          recipes: action.payload,
        }
      ];
    }
    case 'remove': {
      console.log('in reducer')
      return [ 
        ...state,
        {
          recipes: action.payload,
        }
      ];
    }
    default:
      return state;
  }
}

const RecipeList = () => {
  const [state, dispatch] = useReducer(appReducer, []);
  
  const baseUrl = 'https://salt-hackaton-blog-backend.herokuapp.com/api/recipes';
  
  useEffect(state => {
    const fetchData = async () => {
      const result = await axios(baseUrl);
      const recipes = result.data.data;
      const action = {type: 'add', payload: recipes}
      console.log('action',action)
      dispatch({type: 'add', payload: recipes}, state);
    }

    fetchData();
  }, []);
  
  useEffect(
    () => {
      console.log('state', state);
      localStorage.setItem('state', JSON.stringify(state));
    }, [state]);

  return (
    <Context.Provider value={dispatch}>
      <main className={styles.main}>
        <h1 className={styles.main__header}>recipes list</h1>

      </main>
    </Context.Provider>
  )
}

export default RecipeList
