package com.example.movies.service;

import java.util.ArrayList;

import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.example.movies.model.Movie;


@Service
public class DataRefreshed {
    @Autowired
    private MovieService movieService;

    @Scheduled(fixedRate = 86400000)
    // refreshData();

    
    // public void refreshData() {
    //     RefreshedData(a,3,5);
    //     RefreshedData(b,3,5);
    // }



    public void RefreshedData( ){
        Movie movie1=new Movie();
        movie1.setTitle("Raone");
        movie1.setPrice(73);
        movie1.setRatings(4);
        movie1.setVendors("Netflix");
        movieService.getAllRefreshedMovies(movie1);
        System.out.println("Data Rfereshed");
        
    }
    

}
