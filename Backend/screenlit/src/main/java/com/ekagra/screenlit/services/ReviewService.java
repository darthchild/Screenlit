package com.ekagra.screenlit.services;

import com.ekagra.screenlit.documents.Movie;
import com.ekagra.screenlit.documents.Review;
import com.ekagra.screenlit.repositories.MovieRepository;
import com.ekagra.screenlit.repositories.ReviewRepository;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final MovieRepository movieRepository;
    private final MongoTemplate mongoTemplate;

    public ReviewService(ReviewRepository reviewRepository, MovieRepository movieRepository, MongoTemplate mongoTemplate) {
        this.reviewRepository = reviewRepository;
        this.movieRepository = movieRepository;
        this.mongoTemplate = mongoTemplate;
    }



    public Review createReview(String imdbId, String reviewBody){
        Review review = reviewRepository.insert(new Review(reviewBody));

        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds").value(review))
                .first();

        return review;
    }
}
