import axios from 'axios'
import { apiKey } from '../constants'


//endpoints
const baseUrl = 'https://api.themoviedb.org/3'
const trendingMoviesEndpoint =`${baseUrl}/trending/movie/day?api_key=${apiKey}`
const topRatedMoviesEndpoint = `${baseUrl}/movie/top_rated?api_key=${apiKey}`
const upcomingMoviesEndpoint = `${baseUrl}/movie/upcoming?api_key=${apiKey}`
const searchMoviesEndpoint =`${baseUrl}/search/movie?api_key=${apiKey}`


//dynamic endpoint
const movieDetailsEndpoint = (id)=>{
    return `${baseUrl}/movie/${id}?api_key=${apiKey}`
}
const movieCreditsEndpoint = (id)=>{
    return `${baseUrl}/movie/${id}/credits?api_key=${apiKey}`
}
const movieSimilarEndpoint = (id)=>{
    return `${baseUrl}/movie/${id}/similar?api_key=${apiKey}`
}
//person details
const personDetailsEndpoint = (id)=>{
    return `${baseUrl}/person/${id}?api_key=${apiKey}`

}
const personMoviesEndpoint = (id)=>{
    return `${baseUrl}/person/${id}/movie_credits?api_key=${apiKey}`

}

//handle images
export const image500 = (path)=>{
    return path ? `https://image.tmdb.org/t/p/w500${path}`:null
    
}
export const image342 = (path)=>{
   return path ? `https://image.tmdb.org/t/p/w342${path}`:null
    
}
export const image185 = (path)=>{
    return path ? `https://image.tmdb.org/t/p/w185${path}`:null
    
}
export const fallbackMoviePoster = 'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';
export const fallbackPersonImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';
const apiCall = async(endpoint,params)=>{
    const options ={
        method:'GET',
        url:endpoint,
        params:params?params:{}
    }
    try {
        const response = await axios.request(options)
        return response.data
    } catch (error) {
        console.log('Error:',error)
        return {}        
    }
}
export const fetchTrendingMovies =()=>{
    return apiCall(trendingMoviesEndpoint)
}
export const fetchUpcomingMovies = ()=>{
    return apiCall(upcomingMoviesEndpoint)
}
export const fetchTopRatedMovies = ()=>{
    return apiCall(topRatedMoviesEndpoint)
}
export const fetchMovieDetails = (id)=>{
    return apiCall(movieDetailsEndpoint(id))
}
export const fetchSimilarMovies = (id)=>{
    return apiCall(movieSimilarEndpoint(id))
} 
export const fetchMovieCredits = (id)=>{
    return apiCall(movieCreditsEndpoint(id))
}
export const fetchPersonDetails = (id)=>{
    return apiCall(personDetailsEndpoint(id))
}
export const fetchPersonMovies = (id)=>{
    return apiCall(personMoviesEndpoint(id))
}
export const searchMovie = (params)=>{
    return apiCall(searchMoviesEndpoint,params)
}