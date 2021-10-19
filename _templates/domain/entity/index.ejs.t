---
to: src/domain/struct/<%= domain %>/<%= Name %>.ts
---
export type <%= Name %>Id = string;

export interface <%= Name %> {
    readonly id?: <%= Name %>Id;
}
