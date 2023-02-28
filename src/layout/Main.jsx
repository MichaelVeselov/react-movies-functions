import { useState, useEffect } from 'react';

import MovieList from '../components/MovieList';
import Preloader from '../components/UI/Preloader';
import Search from '../components/UI/Search';

import getMovies from '../API/filmService';

function Main() {
  const [currentMovie, setCurrentMovie] = useState('matrix');
  const [currentType, setCurrentType] = useState('all');
  const [movies, setMovies] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setloading] = useState(true);

  const setCurrentMovieType = (movie, type) => {
    if (!movie) {
      setCurrentMovie('');
      setCurrentType(type);
    } else {
      setCurrentMovie(movie);
      setCurrentType(type);
    }
  };

  useEffect(() => {
    getMovies(currentMovie, currentType)
      .then((data) => {
        setMovies(data.Search);
        setTotalItems(data.totalResults);
      })
      .then(() => setloading(false))
      .catch((error) => {
        console.error(error);
        setloading(false);
      });
  }, [currentMovie, currentType]);

  return (
    <main className='container content'>
      <Search setCurrentMovieType={setCurrentMovieType} totalItems={totalItems} />
      {isLoading ? <Preloader /> : <MovieList movies={movies} />}
    </main>
  );
}

export default Main;
