package com.example.movies.service;


import com.example.movies.model.Movie;

import java.util.List;

public interface MovieService {
    // Movie saveMovie(Movie movie);
    List<Movie> getAllMovies();
    Movie getMovieById(Long id);
    // Movie updateMovie(Long id, Movie movie);
    // void deleteMovie(Long id);

}