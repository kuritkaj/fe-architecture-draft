export type TicketId = string;

export interface Ticket {
  readonly id?: TicketId;
  readonly title: string;
  readonly text: string;
}
