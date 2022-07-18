---
to: src/domain/struct/<%= domain %>/<%= Name %>.ts
---
import { PropertyNamesMap } from "/src/lib/type/object";

export type <%= Name %>Id = string;

export interface <%= Name %> {
    readonly id: <%= Name %>Id;
}

export type New<%= Name %> = Omit<<%= Name %>, 'id'>;

// properties
export type <%= Name %>Property = keyof <%= Name %>;
export const <%= name %>PropertyName: PropertyNamesMap<<%= Name %>> = {
  id: "id"
}

// lists
export type <%= Name %>List = <%= Name %>[];
export type <%= Name %>IdList = <%= Name %>Id[];
