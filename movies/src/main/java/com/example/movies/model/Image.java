package com.example.movies.model;

import com.fasterxml.jackson.annotation.JsonBackReference;


import jakarta.persistence.*;

@Entity
@Table(name="images")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long img_id;
    
    private String img_url;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id",nullable = false)
    @JsonBackReference
    private Movie movie;

    public Long getImg_id() {
        return img_id;
    }

    public void setImg_id(Long img_id) {
        this.img_id = img_id;
    }

    public String getImg_url() {
        return img_url;
    }

    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movies) {
        this.movie = movies;
    }

    


}
