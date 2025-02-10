package application.userauth2project.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final JwtAuthenticationCustomFilter jwtAuthenticationCustomFilter;

    public SecurityConfig(JwtAuthenticationCustomFilter jwtAuthenticationCustomFilter) {
        this.jwtAuthenticationCustomFilter = jwtAuthenticationCustomFilter;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(csrfConfigurer -> csrfConfigurer.disable())
                .cors(cors -> cors.disable())
                .authorizeHttpRequests(request-> request
                        .requestMatchers("/user/auth/login")
                        .permitAll()
                        .anyRequest().authenticated())
                .addFilterBefore(jwtAuthenticationCustomFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        http.csrf(csrfConfigurer -> csrfConfigurer.disable())
//                .authorizeHttpRequests(request-> request.anyRequest().authenticated())
//                .httpBasic(Customizer.withDefaults());
//        return http.build();
//    }


//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        http.csrf(csrfConfigurer -> csrfConfigurer.disable())
//                .authorizeHttpRequests(request-> request.anyRequest().authenticated())
//                .formLogin(form -> form.disable())
//                .logout(logout -> logout.disable());
//        return http.build();
//    }

//    @Bean
//    public UserDetailsService userDetailsService() {
//        // Tworzenie użytkowników w pamięci
//        UserDetails user = User.withDefaultPasswordEncoder()
//                .username("user")
//                .password("password")
//                .roles("USER")
//                .build();
//
//        UserDetails admin = User.withDefaultPasswordEncoder()
//                .username("admin")
//                .password("admin")
//                .roles("ADMIN")
//                .build();
//
//        return new InMemoryUserDetailsManager(user, admin);
//    }
}
