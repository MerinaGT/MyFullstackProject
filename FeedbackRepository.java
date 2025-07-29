package com.myapp.backend.repository;

import com.myapp.backend.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface FeedbackRepository extends JpaRepository<Feedback ,Long>{
}
