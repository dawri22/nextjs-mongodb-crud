
import { connectDB } from "./../utils/mongoose"
import Movies from "./../models/Movie";
import MovieCard from "./../components/MovieCard";

async function loadMovies(){
  connectDB();
  const movies = await Movies.find()
  return movies
}

async function HomePage() {
  const movies = await loadMovies()
  return ( 
    <div className='grid grid-cols-3'>
      {movies.map(movie => (
       <MovieCard movie={movie} key={movie._id} />
      ))

      } 
    </div>
  )
}   

export default HomePage

