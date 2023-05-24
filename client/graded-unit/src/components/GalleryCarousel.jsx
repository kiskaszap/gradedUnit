import React, {useEffect, useState} from 'react'
import axios from 'axios'

//assets

const GalleryCarousel = () => {
  const [gallery,setGallery]=useState([])
  const [effect,setEffect]=useState('hidden')
  const imageEffect=(event)=>{
    console.log(event.target);
  }
  useEffect(() => {
      // update the count value
      axios.post('http://localhost:5000/galleryCollect')
        .then( response => {
         console.log(response.data.data);
          
          setGallery(response.data.data)
        })
        .catch(error => {
          console.log(error);
        });
       
  },[]); 
  return (
   <>
   {/* <div className={` h-screen w-screen ${effect}`} ></div> */}
<div className="container mx-auto gap-5 px-5 py-2 lg:px-32 lg:pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
  {gallery.map((item)=>{
    const imagePath=item.filePath.slice(1)
    return <div key={item._id} className=' relative'>
    <img className={` cursor-pointer`} src={`http://localhost:5000${imagePath}`} alt={item.name} />
    <p className=' absolute bottom-3 left-3 text-white text-xl font-poppins '>{item.username}</p>
    </div>
  })}
</div>
</>
)

}

export default GalleryCarousel