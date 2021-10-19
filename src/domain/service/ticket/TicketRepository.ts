import { Ticket, TicketId } from "/src/domain/struct/ticket/Ticket";

export interface TicketRepository {
  getAllTickets(): Promise<Ticket[]>;
  deleteTicket(id: TicketId): Promise<void>;
}
