import { Inject, Injectable } from "/src/lib/di/di";
import { TicketRepositoryToken } from "/src/domain/di/token/ticket";
import { TicketRepository } from "/src/domain/service/ticket/TicketRepository";
import { TicketId } from "/src/domain/struct/ticket/Ticket";

@Injectable()
export class DeleteTicket {
  constructor(
    @Inject(TicketRepositoryToken) protected ticketRepository: TicketRepository
  ) {}

  invoke(id: TicketId) {
    return this.ticketRepository.deleteTicket(id);
  }
}
