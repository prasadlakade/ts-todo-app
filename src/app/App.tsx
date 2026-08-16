import { useEffect, useState } from "react";
import TodoForm from "../features/todos/components/TodoForm";
import TodoList from "../features/todos/components/TodoList";
import useTodos from "../features/todos/hooks/useTodos";
import type { Todo } from "../features/todos/types/todo.types";
import "../styles/App.css";

function App() {
  const { todos, addTodo, updateTodo, toggleTodo, deleteTodo } = useTodos();
  const [editTodo, setEditTodo] = useState<Todo | null>(null);

  useEffect(() => {
    console.log("todos", todos);
  }, [todos]);

  return (
    <>
      <h2>Todo App</h2>
      <section id="center">
        <TodoForm
          todos={todos}
          addTodo={addTodo}
          updateTodo={updateTodo}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </section>
      <hr />
      <section>
        <TodoList
          todos={todos}
          onEdit={setEditTodo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </section>
    </>
  );
}

export default App;
