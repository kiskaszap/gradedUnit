import React from 'react'

const Input = (props) => {
 
  return (
     <div className=''>
                      
                      <input type= {props.type} name={props.label} id={props.id} placeholder={props.placeholder} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-poppins ml-auto mr-[5rem] mb-[5rem] " required="" onChange={(e)=>{
                         props.searchValue(e.target.value)
                         
        console.log(e.target.value);
      }} />
                  </div>
  )
}

export default Input