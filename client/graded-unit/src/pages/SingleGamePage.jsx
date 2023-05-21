import React from 'react'
import { useParams } from 'react-router-dom';
import { allGames } from '../data/games';
import Footer from '../components/Footer';

const SingleGamePage = () => {
 const { id } = useParams();
 
 const filteredGames = allGames.filter((game) => game.name === id);
 console.log(filteredGames);

  return (
   <>
    <div className=' h-[calc(100vh-4.5rem)] m-14'><iframe
                src={filteredGames[0].src}
                key={filteredGames[0].name}
                title={filteredGames[0].name}
                className=' w-full h-full relative'
                allow='gamepad *;'
              ></iframe></div>
              <Footer/>
      </> 
  )
}

export default SingleGamePage