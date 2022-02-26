import * as React from "react";
import { TodoContextType, ITodo } from "../@types/todo";
import { TodoContext } from "../context/todoContext";
import Todo from "../components/Todo";
import Spinner from "../components/Spinner";

const Todos = () => {
  const { todos, deleteTodo, error, loading } = React.useContext(
    TodoContext
  ) as TodoContextType;
  return (
    <>
      {loading && <Spinner />}
      {error && <div>Oops Something went wrong!</div>}
      {todos &&
        todos.map((todo: ITodo) => (
          <Todo key={todo.id} deleteTodo={deleteTodo} todo={todo} />
        ))}
    </>
  );
};

export default Todos;
