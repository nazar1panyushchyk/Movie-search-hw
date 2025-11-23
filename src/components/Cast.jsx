import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCast } from "../api/movie-api";

export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]); 

    useEffect(() => {
        const fetchDataCast = async () => {
            try {
                const data = await fetchCast(movieId);
                setCast(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchDataCast();
    }, [movieId])
    return (
        <>
        {cast.map(actor => (
        <div key={actor.id}>
        <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
        <p>{actor.name}</p>
        <p>Character: {actor.character}</p>
        </div>
        ))}
        </>
    )
}