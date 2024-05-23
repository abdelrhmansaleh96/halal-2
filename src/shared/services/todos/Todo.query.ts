import { useQueries, useQuery } from "@tanstack/react-query";
import { getTodo, getTodosIds } from "@appSharedServices/todos/Todo.services";

//GET TODOS QUERY
export function useTodosIds() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodosIds,
  });
}

export function useTodos(ids: (number | undefined)[] | undefined) {
  return useQueries({
    queries: (ids ?? []).map((id: number | undefined) => {
      return {
        queryKey: ["todo", id],
        queryFn: () => getTodo(id!),
      };
    }),
  });
}
