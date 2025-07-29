package com.myapp.backend.model;
import jakarta.persistence.*;


@Entity
@Table(name = "feedback")

public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String comment;

    public Feedback(){}

    public Feedback(String username, String comment){
        this.username=username;
        this.comment=comment;
    }

    public Long getId(){
        return id;
    }

    public String getUsername(){
        return username;
    }

    public void setUsername(String username){
        this.username=username;
    }

    public String getComment(){
        return comment;
    }

    public void setComment(String comment){
        this.comment=comment;
    }

}
