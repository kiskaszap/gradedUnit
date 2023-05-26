import React, {useState,useEffect, useContext} from 'react'
import ActivitiesComp from './ActivitiesComp'
import axios from 'axios';
import { AppContext } from '../components/AppWrapper';


const ActivitiesMain = () => {
   const { isEventUpdated, setIsEventUpdated } = useContext(AppContext);
  const [eventCollect, setEventCollect]=useState([])
   useEffect(() => {
    axios
      .post('http://localhost:5000/eventCollect')
      .then((res) => {
        console.log(res.data);
        setEventCollect(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isEventUpdated]);
  return (
    <div className='homeActivities__cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {eventCollect.map((item)=>{
                const {filePath}=item
                const imagePath=filePath.slice(1)
                return <ActivitiesComp key={item.name} title={item.title} descreption={item.description} address={item.address} duration={item.duration} imagePath={imagePath} date={item.date}/>
              })}
              
            </div>
  )
}

export default ActivitiesMain