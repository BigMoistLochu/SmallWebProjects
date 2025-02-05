package application.userauth2project.repository;


import application.userauth2project.models.Player;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PlayerRepository extends CrudRepository<Player,Long> {
    Optional<Player> findPlayerByUsername(String username);
}
