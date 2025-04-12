import { useState, useEffect } from "react";

const FavoritePage = ()=>{
const [favoriteList, setFavoriteList] = useState([]);

useEffect(()=>{
    const storedFavoriteList = JSON.parse(localStorage.getItem('favoriteList')) || [];
    setFavoriteList(storedFavoriteList);
},[])

const handleRemove = (id) =>{
  const updatedList = favoriteList.filter(movie => movie.id  !==id);
  setFavoriteList(updatedList);
  localStorage.setItem('favoriteList',JSON.stringify(updatedList));
};
if(favoriteList.length === 0 ) return <p>No movie in favorites.</p>




return(
    <div>
        <h2>My favorite</h2>
        {favoriteList.map(movie =>(
            <div key={movie.id}>
                <h3>{movie.title}</h3>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <button onClick={()=>handleRemove(movie.id)}>Remove</button>
           </div>
        ))}
    </div>
)
}

export default FavoritePage;
