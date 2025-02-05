package application.userauth2project;

import application.userauth2project.models.Player;
import application.userauth2project.repository.PlayerRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UserAuth2ProjectApplication implements CommandLineRunner {

    private final PlayerRepository playerRepository;

    public UserAuth2ProjectApplication(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(UserAuth2ProjectApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Player player = new Player("Konradedk8872","ape@wp.pl","mati123");
    }
}
