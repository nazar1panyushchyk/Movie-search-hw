const API_KEY = "34e585da3157faceffdafa1c5f68ccea";
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchTrending() {
    const response = await fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;   
}

export async function fetchMovies(query) {
    const response = await fetch(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export async function fetchMovieDetails(movieId) {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    return response.json();
}

export async function fetchCast(movieId) {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
    const data = await response.json();
    return data.cast;
}

export async function fetchReviews(movieId) {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

