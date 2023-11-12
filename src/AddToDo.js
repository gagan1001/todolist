import React, { useState } from 'react' ;
function AddTodo({ addTodoHandler })
{
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        addTodoHandler(value);
        setValue('');

    };
    return (
<form onSubmit={handleSubmit}>
    <input type= "text" placeholder="Add new todo" value = {value}
    onChange={(e) => setValue(e.target.value)}
    />
    <button type="submit"> Add </button>
</form>

    );
}