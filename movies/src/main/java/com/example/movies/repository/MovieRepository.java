package com.example.movies.repository;

import com.example.movies.model.Movie;
import java.util.*;

// import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends JpaRepository<Movie,Long> {
    public Optional<Movie> getMovieByTitle(String title);
}
