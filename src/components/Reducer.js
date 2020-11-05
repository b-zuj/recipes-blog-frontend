import React from 'react';

export const Context = React.createContext();

export const appReducer = (action, state) => {
  switch (action.type) {
    case 'ADD_RECIPE_LIST': {
      console.log('in reducer', action.payload)
      return [ 
        ...state,
        {
          recipes: action.payload,
        }
      ];
    }
    case 'add': {
      return [
        ...state,
        {
          recipes: action.payload
        },
      ];
    }
    default:
      return state;
  }
}
