
1、定义不同的异常表示不同的错误，出现异常记录则终止任务

2、filter -> DelegatingFilterProxy -> FilterChainProxy -> SecurityFilterChain(0 - n)

3、Exception handler

4、logging.level.org.springframework.security=TRACE

5、SecurityContextHolder 
    
    1、SecurityContext 
    2、Authentication
        GrantedAuthority
        AuthenticationManager
            ProviderManager 
                AuthenticationProvider 

参考链接：

[Architecture](https://docs.spring.io/spring-security/reference/servlet/architecture.html)

[Username/Password Authentication](https://docs.spring.io/spring-security/reference/5.8/servlet/authentication/passwords/index.html)
    


