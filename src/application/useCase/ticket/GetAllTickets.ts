import { Inject, Injectable } from "/src/lib/di/di";
import { TicketRepository } from "/src/domain/service/ticket/TicketRepository";
import { TicketRepositoryToken } from "/src/domain/di/token/ticket";

@Injectable()
export class GetAllTickets {
  constructor(
    @Inject(TicketRepositoryToken) protected ticketRepository: TicketRepository
  ) {}

  invoke() {
    return this.ticketRepository.getAllTickets();
  }
}
