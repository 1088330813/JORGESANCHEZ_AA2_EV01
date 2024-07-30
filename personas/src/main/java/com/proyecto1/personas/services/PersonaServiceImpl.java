
package com.proyecto1.personas.services;

import com.proyecto1.personas.model.Persona;
import com.proyecto1.personas.repository.PersonaRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaServiceImpl implements PersonaServices {
    @Autowired
    private PersonaRepository PersonaRepository;
    @Override
    public Persona newPersona(Persona newPersona) {
        return PersonaRepository.save(newPersona);
    }

    @Override
    public Iterable<Persona> getAll() {
        return this.PersonaRepository.findAll();
    }

    @Override
    public Persona modifyPersona(Persona persona) {
        
        Optional<Persona> personaEncontrado = this. PersonaRepository.findById(persona.getId());
        if(personaEncontrado.get()!=null){
            personaEncontrado.get().setNombre(persona.getNombre());
            return this.newPersona(personaEncontrado.get());
    }
    
        return null;
    }

    @Override
    public Boolean detetePersona(Long id) {
        this.PersonaRepository.deleteById(id);
        return true;
    }
    
}
