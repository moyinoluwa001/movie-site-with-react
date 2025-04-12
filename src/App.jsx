import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import MainPage from './MainPage.jsx';
import MovieDetails from './MovieDetails.jsx';
import FavoritePage from './FavoritePage.jsx';
import WatchListPage from './WatchListPage.jsx';
import MyListPage from './MyListPage.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';

function App(){
return(
    <Router>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/mainpage' element={<MainPage/>} />
            <Route path='/movie/:id'  element={<MovieDetails/>} />
            <Route path='favorites' element={<FavoritePage/>}/>
            <Route path='watchlist' element={<WatchListPage/>}/>
            <Route path='mylist'  element={<MyListPage/>}/>
        </Routes>
    </Router>
)


}
export default App;



