package application.userauth2project.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthenticationCustomFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        SecurityContextHolder.getContext().getAuthentication();
//        SecurityContextHolder.getContext().setAuthentication();
        //Authentication
//        UsernamePasswordAuthenticationToken userTokenToAuth = new UsernamePasswordAuthenticationToken(
//                userToAuth.getUsername(),
//                null
//                ,userToAuth.getAuthorities());
        System.out.println("SIEMANKO!!!!");
        filterChain.doFilter(request,response);
    }
}
