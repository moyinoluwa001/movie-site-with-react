
import { useState, useEffect } from 'react';

const MyListButton = ({ movie }) => {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const myList = JSON.parse(localStorage.getItem('myList')) || [];
    setIsAdded(myList.some(item => item.id === movie.id));
  }, [movie.id]);

  const handleToggleMyList = () => {
    const myList = JSON.parse(localStorage.getItem('myList')) || [];
    if (isAdded) {
      
      const updatedList = myList.filter(item => item.id !== movie.id);
      localStorage.setItem('myList', JSON.stringify(updatedList));
      setIsAdded(false);
    } else {
    
      myList.push(movie);
      localStorage.setItem('myList', JSON.stringify(myList));
      setIsAdded(true);
    }
  };

  return (
    <button onClick={handleToggleMyList} className='add-list-btn'>
      {isAdded ? 'Remove from My List' : 'Add to My List'}
    </button>
  );
};

export default MyListButton;


