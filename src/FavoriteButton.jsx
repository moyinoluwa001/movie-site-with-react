import { useState, useEffect } from "react";

const FavoritePageButton = ({movie})=>{
const [isFavorite, setIsFavorite] = useState(false);

useEffect(()=>{
    const favoriteList = JSON.parse(localStorage.getItem('favoriteList')) ||[];
    setIsFavorite(favoriteList.some(item => item.id === movie.id ))
},[movie.id])

const handleToggleFavorite = ()=>{
    const favoriteList = JSON.parse(localStorage.getItem('favoriteList')) || [];
    if(isFavorite){
        const updatedList = favoriteList.filter(item => item.id !==movie.id);
        localStorage.setItem('favoriteList',JSON.stringify(updatedList));
        setIsFavorite(false)
    }else{
        favoriteList.push(movie);
        localStorage.setItem('favoriteList',JSON.stringify(favoriteList));
        setIsFavorite(true)
    }
}

return(
    <div>
        <button className="add-favorite-btn" onClick={handleToggleFavorite}>{(isFavorite ?' ♡removeFavorite' : '❤️Addfavorite' )}</button>
    </div>
)

}

export default FavoritePageButton;