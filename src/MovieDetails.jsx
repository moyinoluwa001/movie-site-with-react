import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchMovieDetails,fetchMovieTrailer } from "./api";
import FavoriteButton from "./FavoriteButton";
import MyListButton from "./MyListButton";
import WatchListButton from "./WatchListButton";
import '../src/MovieDetails.css';

const MovieDetails = ()=>{
    const{id} = useParams();
    const [movie,setMovie] = useState(null)
    const [trailerUrl,setTrailerUrl] =useState(null)

    useEffect(()=>{
        const getMovieDetails = async ()=>{
            const data = await fetchMovieDetails(id);
            setMovie(data)
        }
        const getMovieTrailer = async ()=>{
            const trailer =await fetchMovieTrailer(id);
            setTrailerUrl(trailer)
        }
        getMovieDetails();
        getMovieTrailer();
    },[id])
    if(!movie)return <p>Loading ....</p>

    const handlePlay = ()=>{
        if(trailerUrl){
            window.open(trailerUrl, '_blank')
        }else{
            alert('Trailer not available for this movie')
        }
    }

   return(
    <div className="movie-details-container">
        <h1 className="movie-header">{movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  alt={movie.title} />
        <p className="movie-overview ">{movie.overview}</p>
        <p className="rating-release"><strong>Relased data:</strong>{movie.release_date}</p>
        <p className=".rating-release"><strong>Rating:</strong>{movie.vote_average}</p>

        < FavoriteButton movie={movie} />
        <MyListButton movie={movie}/>
        <WatchListButton  movie={movie}/>

        <button onClick={handlePlay}className="add-play-btn">▶️play</button>

        <div>
            <Link to="/favorites">view favorite</Link>
            <Link to="/watchList">view watchList</Link>
            <Link to="/myList">View MyList</Link>
        </div>

    </div>
   )

}

export default MovieDetails;
