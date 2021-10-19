---
inject: true
to: src/domain/di/token/<%= domain %>.ts
append: true
---

export const <%= Name %>RepositoryToken = new InjectionToken<<%= Name %>Repository>(
  "domain.<%= domain %>.<%= name %>-repository"
);