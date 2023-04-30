import React from 'react'
import {BsFillCircleFill, BsFillCheckCircleFill} from 'react-icons/bs'
import { leaders } from '../data/leader'
import Leader from './Leader'

const Users = () => {
  return (
    <div className='my-4'>
      <p className=' flex  items-center'><BsFillCircleFill className=' text-yellow-400'/>Pending users</p>
      <p className=' flex  items-center'><BsFillCheckCircleFill className=' text-green-400'/>Approved users</p>
      <div className=' grid grid-cols-1 md:grid-cols-2'>
       {leaders.map((leader)=>{
        return <>
        <Leader pic={leader.pic} name={leader.name} role={leader.role}/>
        </>
       })}
      </div>
    </div>
  )
}

export default Users