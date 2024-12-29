 const MovieList = ({movies, onMovieClick})=>{
       return(
        <div>
           {movies.map((movie) =>(<div key={movie.id} onClick={()=> onMovieClick(movie.id)} style={{cursor:'pointer'}}>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            </div>
        ))}
        </div>
       )

  }

export default MovieList;