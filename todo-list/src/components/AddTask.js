import { useState } from "react";

const AddTask = () => {
    const [inputValue, setInputValue] = useState('Add a task...');

    return (
        <div>
            <textarea
                value = {inputValue}
                onChange = {(e) => setInputValue(e.target.value)}
            />
        </div>
    );
};

export default AddTask;