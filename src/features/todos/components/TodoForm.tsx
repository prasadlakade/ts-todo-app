import { useState, useEffect } from "react";
import InputText from "../../../generic-components/input/InputText";
import Button from "../../../generic-components/button/button";
import type { Todo } from "../types/todo.types";

type TodoFormProps = {
  todos: Todo[],
  addTodo: (title: string) => Todo[],
  updateTodo: (todo: Todo) => Todo[],
  editTodo: Todo | null,
  setEditTodo: (todo: Todo | null) => void
}

const TodoForm = ({ addTodo, updateTodo, editTodo, setEditTodo }: TodoFormProps) => {
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    setValue(editTodo?.title ?? '')
  }, [editTodo])

  const handleSubmit = () => {
    if (!value.trim()) return

    if (editTodo) {
      updateTodo({ ...editTodo, title: value.trim() })
      setEditTodo(null)
    } else {
      addTodo(value.trim())
    }

    setValue('')
  }

  return (
    <>
      <section>TodoForm</section>
      <section>
        <div className="form-wrapper">
          <div>
            <InputText name="title" id="title" value={value} onChange={(e) => setValue(e.target.value)} />
          </div>
          <div>
            <Button text={editTodo ? "Update Todo" : "Add Todo"} btnOnClick={handleSubmit} type="button" />
            {editTodo && (
              <Button text="Cancel" btnOnClick={() => setEditTodo(null)} type="button" />
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default TodoForm
