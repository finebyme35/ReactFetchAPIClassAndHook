import { useEffect, useState } from "react";

function Todo() {
    const[todos, setTodos] = useState(null);
    const getTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => setTodos(data))
    }
    useEffect(() => {
        getTodos()
    }, [])
    return(
        <div>
            <h1>Todos Page!</h1>
            <hr />
            {
                todos ? 
                todos.map((todo) => 
                    <>
                        <h1>{todo.id} - {todo.title}</h1>
                        
                     </>
                ): <h1>Loading...</h1>
            }
        </div>
    )
}

export default Todo;