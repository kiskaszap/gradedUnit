import { allGames } from '../data/games';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';


const Games = () => {
  const navigate = useNavigate();
  const gamesHandler = (name, src) => {
    navigate(`/games/${name}`);
  };

  return (
    <div>
      <div className=' grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-7 m-12 '>
        {allGames.map((game) => {
          return (
            <div className='relative'>
              {' '}
              <iframe
                src={game.src}
                key={game.name}
                title={game.name}
                className=' w-full h-72 relative'
                allow='gamepad *;'
              ></iframe>
              <div
                className=' absolute top-0 left-0 w-full h-full z-50 '
                onClick={() => {
                  gamesHandler(game.name, game.src);
                }}
              ></div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Games;
