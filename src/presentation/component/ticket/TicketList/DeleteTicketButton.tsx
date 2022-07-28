import { TicketId } from "/src/domain/struct/ticket/Ticket";
import React, { useCallback } from "react";
import { Button } from "/src/presentation/component/designSystem/Button/Button";
import { useDeleteTicket } from "/src/presentation/hook/ticket/useDeleteTicket";

export interface DeleteTicketButtonProps {
  id: TicketId;
}

export const DeleteTicketButton: React.FC<DeleteTicketButtonProps> = ({
  id
}) => {
  const { deleteTicket } = useDeleteTicket();

  const handleDelete = useCallback(() => deleteTicket(id), [id]);

  return (
    <Button key="delete" type="link" onClick={handleDelete}>
      Delete
    </Button>
  );
};
