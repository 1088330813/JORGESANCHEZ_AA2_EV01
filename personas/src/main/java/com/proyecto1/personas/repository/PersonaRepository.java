
package com.proyecto1.personas.repository;

import com.proyecto1.personas.model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PersonaRepository extends JpaRepository<Persona, Long>{
    
}
