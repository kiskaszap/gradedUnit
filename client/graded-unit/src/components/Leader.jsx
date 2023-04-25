import React from 'react'

const Leader = (props) => {
  return (
    <div
              className= {`bg-cover ${props.picPosition} flex-1 relative rounded-xl  h-96 `}
              style={{ backgroundImage: `url(${props.pic})` }}
            >
              <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black flex rounded-xl '>
                <div className='  absolute bottom-4 left-3'>
                  <h4 className='text-white  text-xl font-extrabold font-anton'>
                    {props.name}
                  </h4>
                  <p className='text-white font-poppins'>{props.role}</p>
                </div>
              </div>
            </div>
  )
}

export default Leader