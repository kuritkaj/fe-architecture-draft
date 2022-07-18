import { TicketId, TicketList } from "/src/domain/struct/ticket/Ticket";

export interface TicketRepository {
  getAllTickets(): Promise<TicketList>;
  deleteTicket(id: TicketId): Promise<void>;
}
