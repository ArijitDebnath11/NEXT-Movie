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
           <div className='search-parent'>
           <div className="search-container">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <div className='search-img'>
                    <img src={img}></img>
                </div>
            </div>
           </div>

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
        </section>
    );
};

export default MovieList;

