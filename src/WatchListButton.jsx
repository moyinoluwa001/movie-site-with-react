import { useState, useEffect } from "react";

const WatchListButton=({movie})=>{
const [isAdded,setIsAdded]  = useState();

useEffect(()=>{
  const watchList = JSON.parse(localStorage.getItem('watchList')) ||[];
  setIsAdded(watchList.some(item => item.id === movie.id))
},[movie.id])

const handleToggleWatchList = ()=>{
  const watchList = JSON.parse(localStorage.getItem('watchList')) || [];
  if(isAdded){
    const updatedList = watchList.filter(item => item.id !== movie.id);
    localStorage.setItem('watchList',JSON.stringify(updatedList));
    setIsAdded(false)
  }else{
    watchList.push(movie);
    localStorage.setItem('watchList',JSON.stringify(watchList))
    setIsAdded(true);
  }
}

return(
  <div>
    <button onClick={handleToggleWatchList} className="add-watch-btn">
      {isAdded? "Remove from watch List" : "Add to watch List"}
    </button>
  </div>
)
} 


export default WatchListButton;