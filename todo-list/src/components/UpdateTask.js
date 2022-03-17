import { useState } from "react";
import {ImCancelCircle} from "react-icons/im";
import {ImPencil} from "react-icons/im";
import EditTask from './EditTask';

const UpdateTask = ({newInputValue, completeTodo, removeTodo, updateTodo}) => {
  const [editTask, setEditTask] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = value => {
        updateTodo(editTask.id, value)
        setEditTask({
            id: null,
            value: ''
        })
    };
    if (editTask.id) {
        return <EditTask editTask={editTask} onSubmit={submitUpdate} className="oups"/>;
    }

  return newInputValue.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <button
        className="deleteTask"
        onClick={() => removeTodo(todo.id)}>
        <ImCancelCircle />
      </button>
      <button
        className="editNewTask"
        onClick={() => setEditTask({id: todo.id, value: todo.text})}>
        <ImPencil />
      </button>
    </div>
  ));
};

export default UpdateTask;
