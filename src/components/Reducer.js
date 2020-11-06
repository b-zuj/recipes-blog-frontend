import React from 'react';

export const MyContext = React.createContext();

export const useMyContext =
  () =>  React.useContext(MyContext);

export const appReducer = (state, action) => {
  console.log("action in appreducer", action)
  switch (action.type) {
    case 'add': {
      console.log('in reducer')
      return {
        ...state,
        recipes: action.payload
      };
    }
    default:
      return state;
  }
}
