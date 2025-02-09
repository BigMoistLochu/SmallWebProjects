package application.userauth2project.services;

import application.userauth2project.models.Player;
import application.userauth2project.repository.PlayerRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PlayerService {

    private final PlayerRepository playerRepository;

    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public Player getPlayerByUsername(String username){
        return playerRepository.findPlayerByUsername(username).orElseThrow();
    }

}
