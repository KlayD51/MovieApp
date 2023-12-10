
import './App.css';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

function App() {
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=5c685f50b74c87280f337481b6ac6f2f"
const [movies, setMovies] = useState([])

useEffect(() => {
  fetch(API_URL)
  .then(res => res.json())
  .then(data => setMovies(data.results))
}, [])

console.log(movies)

  return (
    <div className="App">
      <div className='searchNav'>
        <div>
          <h1>Movies</h1>
        </div>

        <div className='searchBox'>
          <form>
            <input />
            <button > Search </button>
          </form>

        </div>

      </div>
      <div className='movies'>
      {movies.map((movie) =>
        <MovieCard/>
       )}
      </div>

    </div>
  );
}

export default App;
