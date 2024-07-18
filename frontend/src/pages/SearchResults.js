// src/pages/SearchResults.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../styles.css';

// const SearchResults = () => {
//     const [results, setResults] = useState([]);
//     const location = useLocation();
//     const query = new URLSearchParams(location.search).get('q');

//     useEffect(() => {
//         if (query) {
//             axios.get(`API_URL/search?q=${query}`)
//                 .then(response => setResults(response.data))
//                 .catch(error => console.error(error));
//         }
//     }, [query]);

//     return (
//         <div className="container search-results">
//             <h1>Search Results for: {query}</h1>
//             {results.map(result => (
//                 <div key={result.id} className="movie-item">
//                     <h2>{result.title}</h2>
//                     <p>Rating: {result.ratings}</p>
//                     <p>Price: {result.price}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default SearchResults;

