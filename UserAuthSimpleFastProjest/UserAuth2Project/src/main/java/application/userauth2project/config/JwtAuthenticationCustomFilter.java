package application.userauth2project.config;

import application.userauth2project.models.Player;
import application.userauth2project.services.PlayerService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthenticationCustomFilter extends OncePerRequestFilter {

    private final PlayerService playerService;

    public JwtAuthenticationCustomFilter(PlayerService playerService) {
        this.playerService = playerService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        System.out.println(request.getHeader("Origin"));
        Player player = playerService.getPlayerByUsername("Konradedk8872");
        UsernamePasswordAuthenticationToken userTokenToAuth = new UsernamePasswordAuthenticationToken(player.getUsername(), null,player.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(userTokenToAuth);

        System.out.println("SIEMANKO!!!!");
        filterChain.doFilter(request,response);
    }
}
