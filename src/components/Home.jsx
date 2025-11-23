import { useState, useEffect } from "react";
import { fetchTrending } from "../api/movie-api";
import { Link } from "react-router-dom";


export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await fetchTrending();
                setMovies(data);
            } catch (error) {
            console.log(error)
        }
        } 
        fetchMovies()
    }, [])
    return (
        <>
        <ul>
        {movies.map(movie => (
            <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
        ))}
        </ul>
        </>
    )
}