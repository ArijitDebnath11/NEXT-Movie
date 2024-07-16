package com.example.movies.controller;

import com.example.movies.service.MovieService;

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

    // @PostMapping
    // public ResponseEntity<Movie> createMovie(@RequestBody Movie movie) {
    //     return ResponseEntity.ok(movieService.saveMovie(movie));
    // }

    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        return ResponseEntity.ok(movieService.getAllMovies());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Movie> getMovieById(@PathVariable Long id) {
        return ResponseEntity.ok(movieService.getMovieById(id));
    }

    // @PutMapping("/{id}")
    // public ResponseEntity<Movie> updateMovie(@PathVariable Long id, @RequestBody Movie movie) {
    //     return ResponseEntity.ok(movieService.updateMovie(id, movie));
    // }

    // @DeleteMapping("/{id}")
    // public ResponseEntity<Void> deleteMovie(@PathVariable Long id) {
    //     movieService.deleteMovie(id);
    //     return ResponseEntity.noContent().build();
    // }
    
}
