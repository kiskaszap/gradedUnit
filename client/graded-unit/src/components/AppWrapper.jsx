import React from 'react'
import { useState } from 'react';
import { allBadges } from '../data/badges';

const AppContext = React.createContext();

const AppWrapper = ({children}) => {

 const [searchValue, setSearchValue]=useState('')
 const [badges, setBadges]=useState(allBadges)
 


 
  return (
    <AppContext.Provider value={{badges,setBadges,searchValue, setSearchValue}}>
     {children}
    </AppContext.Provider>
  )
}

export  {AppWrapper, AppContext}