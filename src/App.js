import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import MoviesList from './moviesList';
import MovieDetails from './movieDetails';
import Login from "./login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="Login" element={<Login />} />
        <Route path="movies" element={<MoviesList />} />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<MoviesList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
