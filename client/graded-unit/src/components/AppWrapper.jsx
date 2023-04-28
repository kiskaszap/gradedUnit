import React from 'react'
import { useState } from 'react';
import { allBadges } from '../data/badges';
import Profile from './Profile';

const AppContext = React.createContext();

const AppWrapper = ({children}) => {

 const [searchValue, setSearchValue]=useState('')
 const [badges, setBadges]=useState(allBadges)
 const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleNav =()=>{
    setDropdownOpen(!dropdownOpen)
  }
  const [component,setComponent]=useState(<Profile/>)
 


 
  return (
    <AppContext.Provider value={{badges,setBadges,searchValue, setSearchValue, dropdownOpen,setDropdownOpen,toggleNav,component,setComponent}}>
     {children}
    </AppContext.Provider>
  )
}

export  {AppWrapper, AppContext}