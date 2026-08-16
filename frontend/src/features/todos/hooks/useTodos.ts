import { useState } from "react";
import type { Todo } from "../types/todo.types";


function useTodos(){
  const [todos, setTodos] = useState<Todo[]>([])

  //create
  function addTodo (title: string): Todo[]{
    setTodos([
      ...todos,
      {
        id: Date.now().toString(),
        title: title,
        completed: false
      }
    ])
    return todos;
  }

  //update
  function updateTodo (todo: Todo): Todo[]{
    const allTodos = todos.map((t) => t.id === todo.id ? { ...t, ...todo } : t);
    setTodos(allTodos)
    return allTodos;
  }


  //delete
//complete
  function deleteTodo(todo: Todo){
    const allTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(allTodos)
    return allTodos
  }

  //complete
  function toggleTodo(todo: Todo){
    const allTodos = todos.map((t) => t.id == todo.id ? {...t, completed: !t.completed }: t);
    setTodos(allTodos)
    return allTodos
  }


  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodo
  }
}

export default useTodos