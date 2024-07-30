
package com.proyecto1.personas.services;

import com.proyecto1.personas.model.Persona;

public interface PersonaServices {
        Persona newPersona(Persona newPersona);
        Iterable<Persona> getAll();
        Persona modifyPersona (Persona persona);
        Boolean deletePersona (Long id);
        
}
