import axios from "axios";
const API_KEY = '801c681f9fd380835fcfc66c8ad2d35d';
const BASE_URL ='https://api.themoviedb.org/3';

export const fetchMovies = async (query)=>{
    const response =  await axios.get(`${BASE_URL}/search/movie`,{
        params:{api_key:API_KEY,query}
    });
    return response.data.results;
};

export const fetchMovieDetails = async (id) =>{
    const response = await axios.get(`${BASE_URL}/movie/${id}`,{
        params:{api_key:API_KEY}
    });
    return response.data;
};

export const fetchMovieTrailer = async (id) =>{
    const response =await axios.get(`${BASE_URL}/movie/${id}/videos`,{
        params:{api_key:API_KEY}
    });
    const trailers = response.data.results.filter(video => video.type === 'Trailer' && video.site === 'YouTube');
    return trailers.length > 0 ? `https://www.youtube.com/watch?v=${trailers[0].key}`: null;
}