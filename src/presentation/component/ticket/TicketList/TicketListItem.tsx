import React, { useMemo } from "react";
import { Ticket, TicketId } from "/src/domain/struct/ticket/Ticket";
import { Button } from "/src/presentation/component/designSystem/Button/Button";
import { List } from "/src/presentation/component/designSystem/List/List";
import { useTicketListItemController } from "/src/presentation/component/ticket/TicketList/useTicketListItemController";

export interface TicketListItemProps {
  id: TicketId;
  title: Ticket["title"];
  text: Ticket["text"];
}

export const TicketListItem: React.FC<TicketListItemProps> = ({
  id,
  title,
  text
}) => {
  const { handleDelete } = useTicketListItemController(id);

  const actions = useMemo(
    () => [
      <Button key="delete" type="link" onClick={handleDelete}>
        Delete
      </Button>
    ],
    [handleDelete]
  );

  return (
    <List.Item key={id} actions={actions}>
      <List.Item.Meta title={title} description={text} />
    </List.Item>
  );
};
