import * as React from "react";
import { TicketList } from "/src/presentation/component/ticket/TicketList/TicketList";
import { Layout } from "/src/presentation/component/designSystem/Layout/Layout";
import { Title } from "/src/presentation/component/designSystem/Typography/Typography";

export const IndexPage: React.FC = () => (
  <div>
    <Layout>
      <Layout.Header>
        <Title>Tickets</Title>
      </Layout.Header>
      <Layout.Content style={{ padding: "20px" }}>
        <TicketList />
      </Layout.Content>
    </Layout>
  </div>
);
