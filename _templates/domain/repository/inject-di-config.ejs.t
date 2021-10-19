---
inject: true
to: src/config/di/<%= domain %>.ts
after: "@repository"
---
{
    provide: <%= Name %>RepositoryToken,
    useClass: <%= Name %>ApiRepository
},
