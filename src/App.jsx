import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import Cast from "./components/Cast";
import Reviews from "./components/Reviews";
import "./css/styles.css";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <nav>
            <NavLink to="/" className="general-link" style={({ isActive }) => ({
              color: isActive ? "red" : "black"
            })}>
              Home
              </NavLink>
            <NavLink to="/movies" className="general-link" style={({ isActive }) => ({
              color: isActive ? "red" : "black"
            })}>
              Movies
              </NavLink>
        </nav>
        <Routes>
            <Route path="/" element={<Home />}>HomePage</Route>
            <Route path="/movies" element={<Movies />}>Movies</Route>
            <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}>Cast</Route>
            <Route path="reviews" element={<Reviews />}>Reviews</Route>
            </Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
