import { Inject, Injectable } from "/src/lib/di/di";
import { HttpClient } from "/src/infrastructure/service/http/HttpClient";
import { TicketRepository } from "/src/domain/service/ticket/TicketRepository";
import { TicketId, TicketList } from "/src/domain/struct/ticket/Ticket";
import { TicketApiMapper } from "./TicketApiMapper";

@Injectable()
export class TicketApiRepository implements TicketRepository {
  private tickets: TicketList = [];

  constructor(@Inject(HttpClient) protected httpClient: HttpClient) {
    this.tickets = Array.from(new Array(10)).map((value, index) => ({
      id: `${index}`,
      title: `Ticket ${index}`,
      text: "Nothing is working properly"
    }));
  }

  getAllTickets(): Promise<TicketList> {
    // In a normal situation we will use TicketApiMapper to map the response entity to our domain entity
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.tickets);
      }, 2000);
    });
  }

  deleteTicket(id: TicketId): Promise<void> {
    return new Promise((resolve) => {
      this.tickets = this.tickets.filter((ticket) => ticket.id != id);

      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
}
