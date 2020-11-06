import React from 'react'

import styles from './Form.module.css'

const Form = ({ callback }) => {
  const formSubmit = event => {
    event.preventDefault();
    const value = document.querySelector("#size").value;

    console.log(value)
    callback(value);
  }

  return (
    <>
      <form className={styles.form}>
        <label for="size">Choose size of your form to adjust the ingredient measurements: </label>
        <select id="size" name="size">
          <option value="27">27</option>
          <option value="25">25</option>
          <option value="23">23</option>
          <option value="21">21</option>
          <option value="20">20</option>
          <option value="18">18</option>
          <option value="15">15</option>
        </select>
        <input type="submit" onClick={formSubmit}/>
      </form>
    </>
  )
}

export default Form
