import React, { useMemo } from "react";
import { Ticket } from "/src/domain/struct/ticket/Ticket";
import { Button } from "/src/presentation/component/designSystem/Button/Button";
import { List } from "/src/presentation/component/designSystem/List/List";
import { useTicketListItemController } from "/src/presentation/component/ticket/TicketList/useTicketListItemController";

export interface TicketListItemProps {
  id: Ticket["id"];
  title: Ticket["title"];
  text: Ticket["text"];
}

export const TicketListItem: React.FC<TicketListItemProps> = React.memo(
  ({ id, title, text }) => {
    const { onDelete } = useTicketListItemController(id!);

    const actions = useMemo(
      () => [
        <Button key="delete" type="link" onClick={onDelete}>
          Delete
        </Button>
      ],
      [onDelete]
    );

    return (
      <List.Item key={id} actions={actions}>
        <List.Item.Meta title={title} description={text} />
      </List.Item>
    );
  }
);
