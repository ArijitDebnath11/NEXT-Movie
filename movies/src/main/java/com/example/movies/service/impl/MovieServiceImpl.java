package com.example.movies.service.impl;

import com.example.movies.model.Movie;
import com.example.movies.repository.MovieRepository;
import com.example.movies.service.MovieService;

import aj.org.objectweb.asm.commons.Method;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MovieServiceImpl implements MovieService {

    @Autowired
    private MovieRepository movieRepository;
    public List<Movie> modify(List<Movie>movies){
        Map<String,Movie> movieMap=new HashMap<>();
        for (Movie movie : movies) {
            String t1=movie.getTitle();
            if (!movieMap.containsKey(t1) || movie.getPrice() < movieMap.get(t1).getPrice()) {
                movieMap.put(t1, movie);
            }
        }
        List<Movie> result = new ArrayList<>();
        for(Movie m:movieMap.values()) result.add(m);

        System.out.println(result);
        return result;
    }
    public void newPri(List<Movie>m){
        for(Movie movie:m){
            double currentPrice = movie.getPrice();
            int ratings = movie.getRatings();

            double newPrice = Math.round((currentPrice +(currentPrice * (ratings * 0.1)))*100D)/100D; 

            movie.setPrice(newPrice);
        }
    }
    @Override
    public List<Movie> getAllMovies() {
        List<Movie>movie=new ArrayList<>();
        movieRepository.findAll().forEach(movie::add);

        movie=modify(movie);

        newPri(movie);

        return movie;
    }

    @Override
    public Movie getMovieById(Long id) {
        Optional<Movie> movie = movieRepository.findById(id);
        if (movie.isPresent()) {
            return movie.get();
        } else {
            throw new RuntimeException("Movie not found for id: " + id);
        }
    }
    @Override
    public Movie getMovieByTitle(String title){
        Optional<Movie> movie = movieRepository.getMovieByTitle(title);
        if (movie.isPresent()) {
            return movie.get();
        } else {
            throw new RuntimeException("Movie not found for id: " + title);
        }
    }
    @Override
    public Movie getAllRefreshedMovies(Movie movie){
        return movieRepository.save(movie);
    }
}
