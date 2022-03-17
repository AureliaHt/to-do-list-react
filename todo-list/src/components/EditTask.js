import { useState } from "react";
import {ImWink} from "react-icons/im";

const EditTask = (props) => {
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
                    className="editTask"
                    name="text"
                    placeholder="Edit your task ..."
                    autoComplete="off"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onSubmit={handleSubmit}>
                </input>
                <button
                    type="submit"
                    className="editButton">
                    <ImWink />
                </button>
            </form>
        </div>
    );
};

export default EditTask;