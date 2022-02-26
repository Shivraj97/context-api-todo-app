export interface ITodo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

export type TodoContextType = {
  todos: ITodo[];
  deleteTodo: (id: number) => void;
  error: string;
  loading: boolean;
};
