package com.example.movies.service.impl;

import com.example.movies.model.Movie;
import com.example.movies.repository.MovieRepository;
import com.example.movies.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MovieServiceImpl implements MovieService {

    @Autowired
    private MovieRepository movieRepository;

    // @Override
    // public Movie saveMovie(Movie movie) {
    //     return movieRepository.save(movie);
    // }
    // public List<Movie> findMoviesWithLowestPriceForEachTitle() {
    //     List<Movie> allMovies = movieRepository.findAll();
    //     System.out.println(allMovies);
    //     List<Movie> filteredMovies = modify(allMovies);

    //     return filteredMovies;
    // }
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

            double newPrice = currentPrice +(currentPrice * (ratings * 0.1)); 
            movie.setPrice(newPrice);
        }
    }
    // public List<Movie> modify(List<Movie>movie){
    //     Map<String,Movie> movieMap=new HashMap<>();
    //     for (Movie m : movie) {
    //         String t1=m.getTitle();
    //         if (!movieMap.containsKey(t1) || m.getPrice() < movieMap.get(t1).getPrice()) {
    //             movieMap.put(t1, m);
    //         }

    //         double currentPrice = m.getPrice();
    //         int ratings = m.getRatings();

    //         double newPrice = currentPrice +(currentPrice * (ratings * 0.1)); 
    //         m.setPrice(newPrice);
    //     }
    //     List<Movie> result = new ArrayList<>(movieMap.values());

    //     return result;
    // }
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

    // @Override
    // public Movie updateMovie(Long id, Movie movieDetails) {
    //     Movie movie = getMovieById(id);

    //     movie.setTitle(movieDetails.getTitle());
    //     movie.setRatings(movieDetails.getRatings());
    //     movie.setPrice(movieDetails.getPrice());
    //     movie.setVendors(movieDetails.getVendors());
    //     movie.setImages(movieDetails.getImages());

    //     return movieRepository.save(movie);
    // }

    // @Override
    // public void deleteMovie(Long id) {
    //     Movie movie = getMovieById(id);
    //     movieRepository.delete(movie);
    // }
}
