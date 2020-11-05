import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.css';
import Footer from './components/Footer/Footer'

const App = () =>(
  <BrowserRouter>
    <div className="App">
      
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;

{/* <Link to="/"><img className={styles.logo} src={inf} alt="logo name" /></Link>
    <Link to="/">Home</Link>
    <Link to="/search">Search</Link>
    <Link to="/about">About</Link> */}