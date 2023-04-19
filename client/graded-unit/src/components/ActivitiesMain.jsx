import React from 'react'
import ActivitiesComp from './ActivitiesComp'
import { activities } from '../data/activities'

const ActivitiesMain = () => {
  return (
    <div className='homeActivities__cards flex gap-5'>
              {activities.map((item)=>{
                return <ActivitiesComp name={item.name} description={item.description} address={item.address} duration={item.duration} pic={item.pic}/>
              })}
              
            </div>
  )
}

export default ActivitiesMain