import { useState } from "react";
import {ImPlus} from "react-icons/im";

const AddTask = (props) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: inputValue
        });

        setInputValue('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    classname="addTask"
                    name="text"
                    placeholder="Add a task ..."
                    autoComplete="off"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onSubmit={handleSubmit}>
                </input>
                <button
                    type="submit"
                    className="addButton">
                    <ImPlus />
                </button>
            </form>
        </div>
    );
};

export default AddTask;