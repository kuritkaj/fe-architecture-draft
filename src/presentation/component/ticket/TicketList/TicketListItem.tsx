import React from "react";
import { Ticket, TicketId } from "/src/domain/struct/ticket/Ticket";
import { List } from "/src/presentation/component/designSystem/List/List";
import { DeleteTicketButton } from "/src/presentation/component/ticket/TicketList/DeleteTicketButton";

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
  const actions = [<DeleteTicketButton id={id} />];

  return (
    <List.Item key={id} actions={actions}>
      <List.Item.Meta title={title} description={text} />
    </List.Item>
  );
};
