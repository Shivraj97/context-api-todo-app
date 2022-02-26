import * as React from "react";
import axios from "axios";
import { TodoContextType, ITodo } from "../@types/todo";

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] =
    React.useState("");

  React.useEffect(() => {
    axios
      .get<ITodo[]>("https://jsonplaceholder.typicode.com/todos", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        const error =
          err.response.status === 404
            ? "Resource Not found"
            : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
      });
  }, []);

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo: ITodo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, deleteTodo, error, loading }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
