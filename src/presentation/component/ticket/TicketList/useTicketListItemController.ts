import { useDeleteTicket } from "/src/presentation/hook/ticket/useDeleteTicket";
import { TicketId } from "/src/domain/struct/ticket/Ticket";
import { useCallback } from "react";

export const useTicketListItemController = (id: TicketId) => {
  const { deleteTicket } = useDeleteTicket();

  const handleDelete = useCallback(() => deleteTicket(id), [id]);

  return {
    handleDelete
  };
};
