import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const imgUrl = "https://via.placeholder.com/150/150";

const Movie = () => {
  const { movie, isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }


  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col">
          {movie
            ? movie.map((curMovieElem) => {
                const { id, title, ratings, price , vendors , images } = curMovieElem;
                console.log(images);
                console.log('curMovieElem', curMovieElem);

                return (
                  <NavLink key={curMovieElem.id} to={`movie/${id}`}>
                    <div className="card">
                      <div className="card-info">
                      <img src={images[0]?.img_url} alt="#" /> 
                        <h2>
                          {title}
                        </h2>
                        <h3>
                          Ratings:{ratings}
                        </h3>
                        <h4>
                          Price($): {price}
                        </h4>
                        <h5>
                          {vendors}
                        </h5>
                      </div>
                    </div>
                  </NavLink>
                );
              })
            : ""}
        </div>
      </section>
    </>
  );
};

export default Movie;