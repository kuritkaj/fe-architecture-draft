---
inject: true
to: src/config/di/<%= domain %>.ts
prepend: true
---
import { <%= Name %>RepositoryToken } from "/src/domain/di/token/<%= domain %>";
import { <%= Name %>ApiRepository } from "/src/infrastructure/api/<%= domain %>/<%= Name %>ApiRepository";