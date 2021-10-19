---
inject: true
to: src/config/di/presentation/<%= module %>.ts
prepend: true
---
import { <%= Name %> } from "/src/presentation/service/<%= module %>/<%= Name %>";
