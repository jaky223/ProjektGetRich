---
name: backend-springboot-developer
description:
  Use this skill to develop backend code in Java using the Spring Boot framework. Focus is on clean code, SOLID principles, separation of concerns (Controllers, Services, Repositories), and secure API design.
---

# Backend Spring Boot Developer

This skill guides the agent in developing high-quality, robust backend code in Java and Spring Boot. All work should strictly adhere to **Clean Code** standards and **SOLID** principles.

## Core Principles

1. **Single Responsibility Principle (SRP):** Classes should have only one reason to change. Controllers handle HTTP requests, Services contain business logic, and Repositories handle database interactions.
2. **Dependency Inversion:** Depend on abstractions (interfaces) rather than concrete implementations where necessary. Inject dependencies via constructor injection (e.g. using `Lombok`'s `@RequiredArgsConstructor` or explicit constructors), never via `@Autowired` fields.
3. **Clean Code:** Use descriptive naming for variables and methods. Methods should be short and do one thing. Avoid deep nesting and magical strings/numbers.
4. **Global Error Handling:** Use a global exception handler (`@ControllerAdvice` or `@RestControllerAdvice`) rather than scattering `try-catch` blocks throughout controllers. Always return meaningful HTTP status codes.

## Workflow

Follow this structured workflow for any Spring Boot development task:

### 1. Requirements & Architecture Plan
- **Understand the Goal:** Identify the exact user requirements before touching the code.
- **RESTful API Design:** Define clear, standard REST endpoints (e.g., `GET /api/users/{id}`, `POST /api/users`).
- **Domain Modeling:** Identify the database entities, DTOs (Data Transfer Objects), and how they map to each other.

### 2. Implementation Steps

**A. Define DTOs and Validation**
- Always use DTOs for requests and responses. **Never expose raw database Entities directly to the client.**
- Use `jakarta.validation` (e.g., `@NotBlank`, `@Size`, `@Email`) on DTO fields to ensure incoming data is valid before it reaches the Service layer.

**B. Entity and Repository Layer**
- Keep Entities clean, mapping them correctly to database tables. Use lazy loading (`FetchType.LAZY`) by default for relations to avoid N+1 queries.
- Interfaces extending `JpaRepository` should primarily rely on derived queries or `@Query` annotations when custom logic is needed.

**C. Business Logic Layer (Services)**
- Place all business logic in classes annotated with `@Service`.
- Use interfaces for Services if multiple implementations are expected (e.g., `RegistrationStrategy`).
- Keep services loosely coupled and highly testable. Handle transaction boundaries (`@Transactional`) strictly at the Service level, not at the Controller or Repository level.

**D. Presentation Layer (Controllers)**
- Controllers (`@RestController`) should be extremely thin. 
- The Controller's only job is to: inject the Service, pass the Request DTO to it, and map the returned result to a Response DTO or `ResponseEntity`.
- Never put business logic inside the Controller.

**E. Configuration and Secrets**
- Constantly look out for hardcoded secrets or URLs. Extract them into `.env`, `application.properties`, or `application.yml` and inject them using `@Value` or `@ConfigurationProperties`.

### 3. Review & Refactor Phase
- **Check SOLID Violations:** Is your Service "God-class" growing too large? Break it into smaller, more focused sub-services.
- **Data Leakage:** Are passwords, internal IDs, or sensitive data inadvertently included in DTO responses?
- **Code Optimization & DB Queries:** Are you performing unnecessary database calls inside loops? Optimize with batch queries or proper JOINs.

## Recommended File Structure

Adhere to the standard layered architecture when implementing features:

- **`controller/`**: Contains ONLY REST controllers (`@RestController`).
- **`service/`**: Contains business logic (`@Service`) interfaces and implementations.
- **`repository/`**: Contains database interfaces (`@Repository`).
- **`model/`** or **`entity/`**: Contains JPA entities representing database tables.
- **`dto/`**: Contains Data Transfer Objects (Request/Response) for API communication.
- **`exception/`**: Contains custom runtime exceptions and the global `GlobalExceptionHandler` (`@ControllerAdvice`).
- **`config/`**: Contains configuration classes (Security, CORS, WebMvc, etc.).
- **`validation/`**: Contains custom annotation logic and validators.
- **`strategy/`**: Implementation of specific Design Patterns (e.g. Strategy Pattern) if necessary.

## Final Output Checklist
- [ ] Is constructor injection used consistently instead of field injection?
- [ ] Are entities safely shielded behind DTOs in API responses?
- [ ] Are database transactions (`@Transactional`) properly managed at the Service layer?
- [ ] Are HTTP responses formatted consistently and using the correct status codes?
- [ ] Does the new code adhere to Clean Code conventions (brief methods, self-documenting code)?
