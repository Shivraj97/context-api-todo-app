import * as React from "react";
import { ITodo } from "../@types/todo";
import { MdDelete } from "react-icons/md";

type Props = {
  todo: ITodo;
  deleteTodo: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, deleteTodo }) => {
  const checkTodo: string = todo.status ? `line-through` : "";
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkTodo}>{todo.title}</h1>
        <span className={checkTodo}>{todo.description}</span>
      </div>
      <div onClick={() => deleteTodo(todo.id)} className="Card--button">
        <MdDelete />
      </div>
    </div>
  );
};

export default Todo;
