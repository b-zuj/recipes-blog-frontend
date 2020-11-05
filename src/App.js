import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styles from './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import RecipeList from './components/RecipeList/RecipeList';
import Recipe from './components/Recipe/Recipe';
import About from './components/About/About';
// import { Context, appReducer } from './components/Reducer';

const App = () => {
  // const dispatch = useReducer(appReducer, []);

  return (
    // <Context.Provider value={dispatch}>
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <Route exact path='/' component={RecipeList} />
        <Route path='/recipe/:title' component={Recipe} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </BrowserRouter>
    // </Context.Provider>
  )
};

export default App;
