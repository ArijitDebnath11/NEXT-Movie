// import { NavLink, useParams } from "react-router-dom";
// import useFetch1 from "./useFetch1";

// const SingleMovie = ({id}) => {
//   const { id } = useParams();
//   const apiUrl = `http://localhost:8080/movies/${id}`;
//   const { isLoading, data: movie, isError } = useFetch1(apiUrl);

//   if (isLoading) {
//     return (
//       <section className="movie-section">
//         <div className="loading">Loading...</div>
//       </section>
//     );
//   }

//   if (isError) {
//     return (
//       <section className="movie-section">
//         <div className="error">Error fetching data</div>
//       </section>
//     );
//   }

//   return (
//     <section className="movie-section">
//       <div className="movie-card">
//         <figure>
//           <img src={movie.poster} alt="" />
//         </figure>
//         <div className="card-content">
//           <p className="title">{movie.title}</p>
//           <p className="card-text">{movie.year}</p>
//           <p className="card-text">{movie.type}</p>
//           <p className="card-text">{movie.imdbID} / 10</p>
//           <p className="card-text">{movie.Country}</p>
//           <NavLink to="/" className="back-btn">
//             Go Back to Home
//           </NavLink>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SingleMovie;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SingleMovie = ({ id }) => {
  const [movie, setMovie] = useState(null);
  // const [details, setDetails]= useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/movies/${id}`);
        setMovie(response.data); // Assuming your backend returns the movie details as JSON
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie:', error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Ratings: {movie.ratingsOutOf5}</p>
      <p>Price: {movie.price}</p>
      {/* Render other details as needed */}
    </div>
  );
};

export default SingleMovie;
