package application.userauth2project.controller;


import application.userauth2project.dtos.LoginRequestDTO;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.OPTIONS})
public class PlayerController {

    @GetMapping("/test")
    public String hello(){
        return "Hey";
    }

    @PostMapping("/auth/login")
    public String authByLogin(@RequestBody LoginRequestDTO loginRequest){

        System.out.println(loginRequest.getPassword());
        System.out.println(loginRequest.getEmail());
        return "JWT";
    }

}
