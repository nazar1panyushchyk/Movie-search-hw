import { useState } from "react";
import { Link } from "react-router-dom"
import { fetchMovies } from "../api/movie-api";

export default function Movies() {
    const [query, setQuery] = useState("");
    const [searchedMovies, setSearchedMovies] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!query) return;

        try {
            const results = await fetchMovies(query);
            console.log(results);
            setSearchedMovies(results); 
        } catch(error) {
            console.log(error);
        }
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search movies..." />
        <button className="search" type="submit">Search</button>
        </form>
        <ul>
        {searchedMovies.length > 0 && searchedMovies.map(movie => (
            <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
         ))}
        </ul>
        </>
    )
}