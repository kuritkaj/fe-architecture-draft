import { useMutation } from "../query/useQuery";
import { getService } from "/src/config/di";
import { TicketId } from "/src/domain/struct/ticket/Ticket";
import { DeleteTicket } from "/src/application/useCase/ticket/DeleteTicket";
import { useInvalidateTicketList } from "/src/presentation/hook/ticket/useTicketList";

export const useDeleteTicket = () => {
  const deleteTicket = getService(DeleteTicket);
  const { invalidateTicketList } = useInvalidateTicketList();

  const mut = useMutation((id: TicketId) => deleteTicket.invoke(id), {
    onSuccess() {
      invalidateTicketList();
    }
  });

  return {
    deleteTicket(id: TicketId) {
      mut.mutate(id);
    }
  };
};
