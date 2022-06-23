export const queryKeys = {
  ticket: {
    key: ["ticket"] as const,
    list: () => [...queryKeys.ticket.key, "list"] as const
  }
};
