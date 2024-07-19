import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import '../styles.css';
import '../MovieList.css';
import img from './search.png';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/movies')
            .then(response => setMovies(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="movie-page">
            <div className='dummy-div'></div>
            <div className='search-parent'>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search movies..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <div className='search-img'>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" role="img" className="icon search-btn">
                            <path d="M1.5 7.75C1.5 9.4076 2.15848 10.9973 3.33058 12.1694C4.50269 13.3415 6.0924 14 7.75 14C9.4076 14 10.9973 13.3415 12.1694 12.1694C13.3415 10.9973 14 9.4076 14 7.75C14 6.0924 13.3415 4.50269 12.1694 3.33058C10.9973 2.15848 9.4076 1.5 7.75 1.5C6.0924 1.5 4.50269 2.15848 3.33058 3.33058C2.15848 4.50269 1.5 6.0924 1.5 7.75V7.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M12.814 12.8132L15.5 15.4999" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                </div>
            </div>
            {filteredMovies.length === 0 ? (
                <div className="not-found">
                    <h2>Movies not found</h2>
                </div>
            ) : (
                <div className="grid grid-4-col">
                    {filteredMovies.map((curMovieElem) => {
                        const { id, title, ratings, price, vendors, images } = curMovieElem;

                        return (
                            <NavLink key={id} to={`movie/${id}`}>
                                <div className="card">
                                    <div className="card-info">
                                        <img src={images[0]?.img_url} style={{ height: 300, width: 200 }} alt="#" />
                                        <h2>{title}</h2>
                                        <h3>Ratings: {Math.round(ratings)}</h3>
                                        <h4>Price($): {price}</h4>
                                        <h5>{vendors}</h5>
                                    </div>
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default MovieList;

            {/* <div className="grid grid-4-col">
                {filteredMovies.map((curMovieElem) => {
                    const { id, title, ratings, price, vendors, images } = curMovieElem;

                    return (
                        <NavLink key={id} to={`movie/${id}`}>
                            <div className="card">
                                <div className="card-info">
                                    <img src={images[0]?.img_url} style={{ height: 300, width: 200 }} alt="#" />
                                    <h2>{title}</h2>
                                    <h3>Ratings: {Math.round(ratings)}</h3>
                                    <h4>Price($): {price}</h4>
                                    <h5>{vendors}</h5>
                                </div>
                            </div>
                        </NavLink>
                    );
                })}
            </div>
        </section>
    );
}; */}
{/* 
export default MovieList; */}
              



