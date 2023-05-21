import React from 'react'
import ActivitiesComp from './ActivitiesComp'
import { activities } from '../data/activities'

const ActivitiesMain = () => {
  return (
    <div className='homeActivities__cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {activities.map((item)=>{
                return <ActivitiesComp key={item.name} name={item.name} description={item.description} address={item.address} duration={item.duration} pic={item.pic} date={item.date}/>
              })}
              
            </div>
  )
}

export default ActivitiesMain