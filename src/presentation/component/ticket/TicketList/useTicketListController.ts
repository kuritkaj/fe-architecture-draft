import { useGetAllTickets } from "/src/presentation/hook/ticket/useGetAllTickets";
import { useEffect } from "react";
import { useDeleteTicket } from "/src/presentation/hook/ticket/useDeleteTicket";

export const useTicketListController = () => {
  const { isLoading, isRefetching, isError, data } = useGetAllTickets();

  useEffect(() => {
    // display error notification
  }, [isError]);

  return {
    isLoading: isLoading || isRefetching,
    isError,
    tickets: data
  };
};
