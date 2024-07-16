package com.example.movies.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.movies.model.Image;

public interface ImageRepository extends JpaRepository<Image,Long> {

}
