import { useMutation } from "../query/useQuery";
import { getService } from "/src/config/di";
import { TicketId } from "/src/domain/struct/ticket/Ticket";
import { DeleteTicket } from "/src/application/useCase/ticket/DeleteTicket";
import { useGetAllTicketsInvalidate } from "/src/presentation/hook/ticket/useGetAllTickets";

export const useDeleteTicket = () => {
  const deleteTicket = getService(DeleteTicket);
  const invalidateTickets = useGetAllTicketsInvalidate();

  const mut = useMutation((id: TicketId) => deleteTicket.invoke(id), {
    onSuccess() {
      invalidateTickets();
    }
  });

  return (id: TicketId) => mut.mutate(id);
};
