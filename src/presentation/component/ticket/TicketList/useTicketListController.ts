import { useTicketList } from "/src/presentation/hook/ticket/useTicketList";

export const useTicketListController = () => {
  const { isLoading, isRefetching, data } = useTicketList();

  return {
    isLoading: isLoading || isRefetching,
    tickets: data
  };
};
