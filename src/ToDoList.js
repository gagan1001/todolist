function ToDoList({todos, toggleCompIettonHandIer, deleteToDoHandler}){
    
return (
    <ul>
{todos.map((todo, index)=> (
<TodoItem
key={ index}
todo={todo}
toggleCompIettonHandIer={()=> toggleCompIettonHandIer(index)}
deleteTodoHandIer={()=> deleteTodoHandIer( index)}
/>
))}
</ul>
);
}

