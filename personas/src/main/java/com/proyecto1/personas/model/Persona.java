package com.proyecto1.personas.model;

// Clase para entidad de la aplicación

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;


@Entity
@Data

public class Persona {
@Id
@Column
private Long id;
@Column
private String nombre;
}
