

import { useState, useEffect } from "react";

const MyListPage = ()=>{
const [myList,setMyList] = useState([]);

useEffect(()=>{
    const storedMyList = JSON.parse(localStorage.getItem('myList')) || [];
    setMyList(storedMyList);
},[])

const handleRemove = ()=>{
    const updatedList = myList.filter(movie => movie.id !== id)
    setMyList(updatedList);
    localStorage.setItem('myList',JSON.stringify(updatedList));
};
if (myList.length == 0 ) return <p>No movie in my list</p>


return(
    <div>
        <h2>My List</h2>
        {myList.map(movie=>(
            <div key={movie.id}>
             <h3>{movie.title}</h3>   
             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
             <button onClick={()=>handleRemove(movie.id)}>Remove</button>
            </div>
        ))}
    </div>
)
}

export default MyListPage;