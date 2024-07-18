package com.example.movies.controller;

import com.example.movies.service.MovieService;

import io.swagger.v3.*;

import com.example.movies.model.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        return ResponseEntity.ok(movieService.getAllMovies());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Movie> getMovieById(@PathVariable Long id) {
        return ResponseEntity.ok(movieService.getMovieById(id));
    }

    @GetMapping("/s/{title}")
    public ResponseEntity<Movie> getMovieByTitle(@PathVariable String title) {
        return ResponseEntity.ok(movieService.getMovieByTitle(title));
    }

    @PostMapping
    public ResponseEntity<Movie> getAllRefreshedMovies(@RequestBody Movie movie) {
        return ResponseEntity.ok(movieService.getAllRefreshedMovies(movie));
    }

    
}
