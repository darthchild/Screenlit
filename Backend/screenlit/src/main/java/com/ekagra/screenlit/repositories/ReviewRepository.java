package com.ekagra.screenlit.repositories;

import com.ekagra.screenlit.documents.Movie;
import com.ekagra.screenlit.documents.Review;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ReviewRepository extends MongoRepository<Review, ObjectId> {

}
