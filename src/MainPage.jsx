import { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { fetchMovies } from "./api";
// import '../src/MainPage.css';
import "./MainPage.css";

const MainPage = ()=>{

const navigate = useNavigate();
const [query, setQuery] = useState("");
const [movies, setMovies] = useState([]);


useEffect(()=>{
    const profile = localStorage.getItem('userProfile')
    if(!profile){
        navigate('/')
    }else{
        const loadDefaultMovies = async() =>{
        const results = await fetchMovies('popular');
        setMovies(results);
        };
        loadDefaultMovies();
    }
},[navigate]);

const handleSearch = async () =>{
    const results = await fetchMovies(query)
    setMovies(results)
}

const handleMovieClick = (id) =>{
    navigate(`/movie/${id}`)
}


return(
    <div className="Mainpage">
        <h1>Sporty Light Movie App</h1>
        <input type="text" 
               value={query} 
               onChange={(e)=>setQuery(e.target.value)} 
               placeholder="search for a movie" 
               className="main-input"
               />
        <button onClick={handleSearch} className="main-button">Search</button>


          <div className="movie-grid">
            {movies.map((movie)=>(
                <div key={movie.id} className="movie-item" onClick={()=>handleMovieClick(movie.id)}>
                 <h2>{movie.title}</h2>
                 <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                </div>
                
            ))}
          </div>
    </div>
)

}

export default MainPage;
