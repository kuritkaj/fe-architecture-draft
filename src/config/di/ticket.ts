import { DeleteTicket } from "/src/application/useCase/ticket/DeleteTicket";
import { GetAllTickets } from "/src/application/useCase/ticket/GetAllTickets";
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
