
package personas.controller;

import com.proyecto1.personas.model.Persona;
import com.proyecto1.personas.services.PersonaServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/persona")
public class PersonaController {
    @Autowired
    private PersonaServices personaServices;
    
    @PostMapping("/nuevo")
    public Persona newPersona(@RequestBody Persona newPersona){
        return this.personaServices.newPersona(newPersona);
    
    } 
    @GetMapping("/mostrar")
    public Iterable <Persona> getAll(){
        return personaServices.getAll();
    }
    @PostMapping("/modificar")
    public Persona updatePersona(@RequestBody Persona persona){
        return this.personaServices.modifyPersona(persona);
    }
    @PostMapping(value="/{id}")
    public Boolean deleteBoolean (@PathVariable(value="id") Long id){
        return this.personaServices.deletePersona(id);
    } 
}
