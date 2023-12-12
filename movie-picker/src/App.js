
import './App.css';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

function App() {
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=5c685f50b74c87280f337481b6ac6f2f"
const API_SEARCH ="https://api.themoviedb.org/3/search/movie?api_key=5c685f50b74c87280f337481b6ac6f2f&query="

const handleSearch = (e) => {
  e.preventDefault()

  fetch(API_SEARCH + term)
  .then(res => res.json())
  .then(data => setMovies(data.results))
}

const [movies, setMovies] = useState([])
const [term, setTerm] = useState('')

useEffect(() => {
  fetch(API_URL)
  .then(res => res.json())
  .then(data => setMovies(data.results))
}, [])

console.log(movies)

  return (
    <div className="App">
      <div className='searchNav'>
        <div className='title'>
          <h1>Movies</h1>
        </div>

        <div className='searchBox'>
          <form onSubmit={handleSearch}>
            <input onChange={(e)=> setTerm(e.target.value)} />
            <button > Search </button>
          </form>

        </div>

      </div>
      <div className='movies'>
      {movies.map((movie) =>
        <MovieCard {...movie}/>
       )}
      </div>

    </div>
  );
}

export default App;
