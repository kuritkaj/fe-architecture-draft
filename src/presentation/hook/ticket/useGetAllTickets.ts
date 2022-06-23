import { useQuery, useQueryClient } from "../query/useQuery";
import { getService } from "/src/config/di";
import { GetAllTickets } from "/src/application/useCase/ticket/GetAllTickets";
import { queryKeys } from "/src/presentation/hook/query/queryKeys";

const queryKey = queryKeys.ticket.list();

export const useGetAllTickets = () => {
  const getAllTickets = getService(GetAllTickets);

  return useQuery(queryKey, () => getAllTickets.invoke());
};

export const useGetAllTicketsInvalidate = () => {
  const client = useQueryClient();

  return () => {
    client.invalidateQueries(queryKey);
  };
};
