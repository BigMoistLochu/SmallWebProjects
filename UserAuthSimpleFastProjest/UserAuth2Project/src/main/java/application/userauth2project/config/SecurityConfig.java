package application.userauth2project.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {


    private final AuthenticationProvider daoAuthenticationProvider;

    public SecurityConfig(AuthenticationProvider daoAuthenticationProvider) {
        this.daoAuthenticationProvider = daoAuthenticationProvider;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(csrfConfigurer -> csrfConfigurer.disable())
                .authorizeHttpRequests(request-> request.anyRequest().authenticated())
                .httpBasic(withDefaults());
        //.authenticationProvider(daoAuthenticationProvider)
                //.addFilterBefore(jwtAuthenticationCustomFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

}
