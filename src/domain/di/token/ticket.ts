import { TicketRepository } from "/src/domain/service/ticket/TicketRepository";
import { InjectionToken } from "/src/lib/di/di";
export const TicketRepositoryToken = new InjectionToken<TicketRepository>(
  "domain.ticket.ticket-repository"
);
