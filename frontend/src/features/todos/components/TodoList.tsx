import Button from "../../../generic-components/button/Button";
import type { Todo } from "../types/todo.types";

type TodoListProps = {
  todos: Todo[];
  onEdit: (todo: Todo) => void;
  toggleTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
};

const TodoList = ({ todos, onEdit, toggleTodo, deleteTodo }: TodoListProps) => {
  return (
    <div>
      <h3>TodoList</h3>
      <div className="todolist-wrapper">
        <ul>
          {todos &&
            todos.map((todo) => (
              <li key={todo.id} className="d-flex d-justify-between">
                <div className="d-flex">{todo.title}</div>
                <div className="d-flex">
                  <Button
                    type="button"
                    text="Update"
                    btnOnClick={() => onEdit(todo)}
                  />
                  <Button
                    type="button"
                    text={!todo.completed ? "Complete" : "Reset"}
                    btnOnClick={() => toggleTodo(todo)}
                  />
                  <Button
                    type="button"
                    text="Delete"
                    btnOnClick={() => deleteTodo(todo)}
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
