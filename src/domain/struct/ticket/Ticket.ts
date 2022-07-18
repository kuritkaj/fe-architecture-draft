import { PropertyNamesMap } from "/src/lib/type/object";

export type TicketId = string;

export interface Ticket {
  readonly id: TicketId;
  readonly title: string;
  readonly text: string;
}

// properties
export type TicketProperty = keyof Ticket;
export const ticketPropertyName: PropertyNamesMap<Ticket> = {
  id: "id",
  title: "title",
  text: "text"
};

// lists
export type TicketList = Ticket[];
export type TicketIdList = Ticket[];
