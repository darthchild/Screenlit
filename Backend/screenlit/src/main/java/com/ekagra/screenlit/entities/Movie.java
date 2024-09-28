package com.ekagra.screenlit.entities;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "movies")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MovieEntity {
    @Id
    private long id;
    private String name;
    private Boolean isActive;
}
