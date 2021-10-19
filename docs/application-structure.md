# Application structure

This application design principles are inspired by the Clean architecture.

## Directory structure

```
- src
| - config - app configuration
| - domain - domain / business logic
| - | - di - dependency injection tokens
| - | - struct - base data structures for entities
| - | - model - entities enhanced with some logic - validation for example
| - | - service - services and service interfaces (which will be implemented in different layer)
| - useCase - all applications use cases
| - infrastructure - implementation of domain service interfaces, communication with outside world and persistence
| - lib - shared code
| - presentation - view layer
```

## Layers
### Domain
### Use Case
### Infrastructure
### Presentation