import { useTodos, useTodosIds } from "@appSharedServices/todos/Todo.query";
function Todo() {
  const todoIdsQuery = useTodosIds();
  const todosQueries = useTodos(todoIdsQuery.data);

  return (
    <>
      <h2>
        {todoIdsQuery.data?.map((id: number) => (
          <p key={id}>Id: {id}</p>
        ))}
      </h2>
      <ul>
        {todosQueries.map(({ data }) => (
          <>
            <h2>
              <strong>ID: </strong>
              <span>{data?.id}</span>
            </h2>
            <h2>
              <strong>Title: {data?.title}</strong>
              <strong>{data?.title}</strong>
            </h2>
          </>
        ))}
      </ul>
    </>
  );
}

export default Todo;
