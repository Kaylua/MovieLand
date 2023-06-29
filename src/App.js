import React from "react";
import { useEffect, useState } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./components/MovieCard";

const API_URL = "http://www.omdbapi.com/?apikey=9b5d65a6";

function App(){
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    async function searchMovies(title){
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
    }

    useEffect(()=>{
    }, [])

    return(
        <div className="app">
            <h1>MovieLand</h1>
            
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(event)=>setSearchTerm(event.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={()=> searchMovies(searchTerm)}
                />
            </div>
            {
                // Si on trouve un movie, sinon...
                movies?.length > 0 ? (
                    <div className="container"> 
                        {movies.map((movie) => {
                            return <MovieCard movie={movie}/>;
                        })}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }

        </div>
    )
}

export default App;