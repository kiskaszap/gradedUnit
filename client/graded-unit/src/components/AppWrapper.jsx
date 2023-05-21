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
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const [isAdmin,setIsAdmin]=useState(false)
  const [isUser,setIsUser]=useState(false)
  const [userData,setUserData]=useState({
    name:'',
    email:'',
    phone:'',
    address:'',
    completedTraining:[],
    availability:''

  })
  const [profilePicture, setProfilePicture] = useState(null);
  const[fetchedPicture,setFetchedPicture]=useState(null)
  const [selectedImages,setSelectedImages]= useState([])
  const [isUpdated,setIsUpdated]=useState(false)
  const [pendingPictures,setPendingPictures]=useState(null)

  const logOut =()=>{
    setIsUser(false)
    setIsAdmin(false)
    setIsLoggedIn(false)
    setUserData(null)
    setProfilePicture(null)
    setFetchedPicture(null)
    setSelectedImages([])
    
  }
 


 
  return (
    <AppContext.Provider value={{badges,setBadges,searchValue, setSearchValue, dropdownOpen,setDropdownOpen,toggleNav,component,setComponent, isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin, isUser,setIsUser, logOut, userData, setUserData,profilePicture, setProfilePicture,fetchedPicture,setFetchedPicture, selectedImages,setSelectedImages, isUpdated,setIsUpdated, pendingPictures,setPendingPictures}}>
     {children}
    </AppContext.Provider>
  )
}

export  {AppWrapper, AppContext}