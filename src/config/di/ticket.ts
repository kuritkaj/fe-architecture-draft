import { DeleteTicket } from "/src/useCase/ticket/DeleteTicket";
import { GetAllTickets } from "/src/useCase/ticket/GetAllTickets";
import { TicketRepositoryToken } from "/src/domain/di/token/ticket";
import { TicketApiRepository } from "/src/infrastructure/api/ticket/TicketApiRepository";

export const ticketProviders = [
  // @repository
  {
    provide: TicketRepositoryToken,
    useClass: TicketApiRepository
  },
  // @useCase
  DeleteTicket,
  GetAllTickets
];
