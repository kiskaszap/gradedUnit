import React from 'react'
import { useContext } from 'react'
import { AppContext} from '../components/AppWrapper'

const DashboardButton = (props) => {
  const {setComponent } = useContext(AppContext);
  return (
    <button className='flex  gap-3 items-center font-semibold font-poppins focus:bg-white py-2 pl-20 w-full rounded-xl focus:text-[#0FCE7E]' onClick={()=>{
        setComponent(props.component)
       }}>{props.icon}{props.name}</button>
  )
}

export default DashboardButton