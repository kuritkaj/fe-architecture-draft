import { useQuery, useQueryClient } from "../query/useQuery";
import { getService } from "/src/config/di";
import { GetAllTickets } from "/src/useCase/ticket/GetAllTickets";

const queryKey = ["getAllTickets"];

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
