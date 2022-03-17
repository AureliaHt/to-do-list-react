import AddTask from "./AddTask";
import UpdateTask from "./UpdateTask";
import { useState } from "react";

const List = () => {
    const [newInputValue, setNewInputValue] = useState([]);

    const addNewTask = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        };

        const addNewInputValue = [todo, ...newInputValue];
        setNewInputValue(addNewInputValue);
    } ;

    const completeTodo = id => {
        let updatedNewInputValue = newInputValue.map( todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setNewInputValue(updatedNewInputValue);
    };

    const removeTodo = id => {
        const removeTask = [...newInputValue].filter(todo => todo.id !== id);
        setNewInputValue(removeTask);
    };

    const updateTodo = (todoId, newValue)  => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        };
        setNewInputValue(prev => prev.map(task => (task.id === todoId ? newValue : task)));
    };

    return (
        <div>
            <AddTask  onSubmit={addNewTask} />
            <UpdateTask 
            newInputValue={newInputValue}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo} />
        </div>
    );
};

export default List;