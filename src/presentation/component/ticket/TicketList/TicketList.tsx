import React from "react";
import { List } from "/src/presentation/component/designSystem/List/List";
import { useTicketListController } from "/src/presentation/component/ticket/TicketList/useTicketListController";
import { TicketListItem } from "/src/presentation/component/ticket/TicketList/TicketListItem";
import { Ticket, ticketPropertyName } from "/src/domain/struct/ticket/Ticket";

export const TicketList: React.FC = React.memo(() => {
  const { isLoading, tickets } = useTicketListController();

  return (
    <List<Ticket>
      rowKey={ticketPropertyName.id}
      bordered={true}
      loading={isLoading}
      dataSource={tickets}
      renderItem={({ id, text, title }) => (
        <TicketListItem id={id} title={title} text={text} />
      )}
    />
  );
});
