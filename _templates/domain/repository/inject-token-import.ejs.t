---
inject: true
to: src/domain/di/token/<%= domain %>.ts
prepend: true
---
import { <%= Name %>Repository } from "/src/domain/service/<%= domain %>/<%= Name %>Repository";