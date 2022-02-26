export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type TodoContextType = {
  todos: ITodo[];
  deleteTodo: (id: number) => void;
  error: string;
  loading: boolean;
};
