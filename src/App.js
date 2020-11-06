import React, { useReducer, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import { MyContext, appReducer } from './components/Reducer';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import RecipeList from './components/RecipeList/RecipeList';
import Recipe from './components/Recipe/Recipe';
import About from './components/About/About';
import styles from './App.css';

const App = () => {
  const [state, dispatch] = useReducer(appReducer, []);

  const baseUrl = 'https://salt-hackaton-blog-backend.herokuapp.com/api/recipes';
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(baseUrl);
      const recipes = result.data.data;
      dispatch({type: 'add', payload: recipes});
    }
    fetchData();
  }, []);
  
  useEffect(
    () => {
      console.log('state', state);
      localStorage.setItem('state', JSON.stringify(state));
    }, [state]);
  
  const context = { ...state };

  return (
    <MyContext.Provider value={context}>
      <BrowserRouter>
        <div className={styles.app}>
          <Header />
          <Route exact path='/' component={RecipeList} />
          <Route path='/recipe/:title' component={Recipe} />
          <Route path='/about' component={About} />
          <Footer />
        </div>
      </BrowserRouter>
    </MyContext.Provider>
  )
};

export default App;
