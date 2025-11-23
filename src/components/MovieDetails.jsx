import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams, useNavigate } from "react-router-dom";
import { fetchMovieDetails } from "../api/movie-api";

export default function MovieDetails() {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await fetchMovieDetails(movieId);
            setMovieDetails(data);
        } catch (error) {
            console.log(error);
        }
        }   
        fetchData();
    }, [movieId])
    return (
        <>
        {movieDetails && (
        <>
        <button className="go-back" onClick={() => navigate("/")}>🔙 Go back</button>
        <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt="photo" />
        <h2>{movieDetails.original_title}</h2>
        <p>Overview: {movieDetails.overview}</p>
        <p>Genres: {movieDetails.genres.map(g => g.name).join(", ")}</p>
        
        <p>Additional information:</p>
        <nav>
        <NavLink to="cast" className="info-link">Cast</NavLink>
        <NavLink to="reviews" className="info-link">Reviews</NavLink>
        </nav>

        <Outlet />
        </>
     )}
     </>
    );
}