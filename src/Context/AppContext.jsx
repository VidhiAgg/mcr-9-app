import React, { createContext, useReducer } from 'react'
import { categories, videos } from '../Data/data';
import { reducer } from '../Reducer/reucer';

export const AppContext = createContext();
const AppContextProvider = ({children}) => {
  const intialState ={
    availableCategories: categories ,
    videoes: videos,
    selecteCategory:"",
    selectedCategoryVideos: []
}
  const [state, dispatch] = useReducer(reducer, intialState)
console.log(state?.availableCategories);
  return (
    <AppContext.Provider 
    value=
    {{availCategory: state?.availableCategories, dispatch,
      selectedCatVideo: state?.selectedCategoryVideos
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider