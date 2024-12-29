import { useState, useEffect } from "react";
import { useActionData } from "react-router-dom";


const WatchListPage = ()=>{

const [watchList,setWatchList] = useState([]);

useEffect(()=>{
    const storedWatchList  = JSON.parse(localStorage.getItem('watchList')) || [];
    setWatchList(storedWatchList);
},[]);

const handleRemove = () =>{
    const updatedList = watchList.filter(movie => movie.id !==id)
    setWatchList(updatedList);
    localStorage.setItem('watchList', JSON.stringify(updatedList))
}
if(watchList.length == 0) return <p>No movies in watchList</p>


return(
    <div>
        <h2>My watch List</h2>
        {watchList.map(movie =>(
            <div key={movie.id}>
                <h2>{movie.title}</h2>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  alt={movie.title} />
                <button onClick={()=>handleRemove(movie.id)}>remove</button>
           </div>
        ))}
    </div>
)
}

export default WatchListPage;