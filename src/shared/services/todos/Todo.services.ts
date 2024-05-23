import { ApiClient } from "@appSharedServices/BaseApiClient";
import { TodoDto } from "@appSharedModels/index";

const apiClient = new ApiClient();

// GET TODOS IDS API FUNCTION
export const getTodosIds = async () => {
  return (await apiClient.get<TodoDto[]>("todos")).data?.map((todo: TodoDto) => todo.id);
};
// GET TODO API FUNCTION
export const getTodo = async (id: number) => {
  return (await apiClient.get<TodoDto>(`todos/${id}`)).data;
};
