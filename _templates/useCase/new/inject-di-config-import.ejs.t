---
inject: true
to: src/config/di/<%= domain %>.ts
prepend: true
---
import { <%= Name %> } from "/src/useCase/<%= domain %>/<%= Name %>";
