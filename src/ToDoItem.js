function Todoltem({ todo, toggleCompletionHandler, deleteTodoHandIer})
{

    return (
        <li 
        style = {{
    textDecoration :todo.completed ? 'line-through' : 'none', }}
    >

     {todo.text}
     <button onClick = {toggleCompletionHandler}>
   {todo.completed ? 'Mark Incomplete': 'Mark Complete'}
   </button>
   <button onClick={deleteTodoHandIer}>Delete</button>
   </li>
   );
        }
    