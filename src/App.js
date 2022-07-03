
import { useEffect, useState } from "react";

import './App.css';
import searchIcon from './search.svg';
import MoviesCard from "./MoviesCard";

//a15d40ca

const API_URL = 'http://www.omdbapi.com?apikey=a15d40ca';

const movies1 = {
    "Title": 'Amazing Spiderman Syndrome',
    "Year": '2012',
    "imdbID": 'tt2586634',
    "Type": 'movie',
    "Poster": 'N/A'
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searcMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    };

    useEffect(() => {
        searcMovies('spiderman');
    }, []);


    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="search the movie"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                >
                </input>
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={() => searcMovies(searchTerm)}
                >
                </img>
            </div>
            {
                movies?.length > 0
                ? (
                    <div   div className="container">
                       {
                           movies.map((movies) => (
                               <MoviesCard movies = {movies}/>
                           ))
                       }
                    </div>
                ) : (
                    <div className="Empty">
                        <h2>Movie Not Found</h2>
                    </div>
                )
            }
            

        </div>
    );
}

export default App;