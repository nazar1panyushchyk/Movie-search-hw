import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../api/movie-api";

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]); 

    useEffect(() => {
        const fetchDataReviews = async () => {
            try {
                const data = await fetchReviews(movieId);
                setReviews(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchDataReviews();
    }, [movieId])
    return (
        <>
        {reviews.length > 0 ? reviews.map(review => (
        <div key={review.id}>
        <h2>{review.author}</h2>
        <p>{review.content}</p>
        </div>
        )) : <p>We don't have any reviews for this movie</p>}
        </>
    )
}