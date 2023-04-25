import React from 'react'
import { useState } from 'react';
import { allBadges } from '../data/badges';

const AppContext = React.createContext();

const AppWrapper = ({children}) => {

 const [searchValue, setSearchValue]=useState('')
 const [badges, setBadges]=useState(allBadges)
 const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleNav =()=>{
    setDropdownOpen(!dropdownOpen)
  }
 


 
  return (
    <AppContext.Provider value={{badges,setBadges,searchValue, setSearchValue, dropdownOpen,setDropdownOpen,toggleNav}}>
     {children}
    </AppContext.Provider>
  )
}

export  {AppWrapper, AppContext}