import { useState } from "react"
import { dummyData } from "./data/todos"
import TodoListItem from "./components/TodoListItem"

function App() {
  const [todos, setTodos] = useState(dummyData)

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) => 
    prevTodos.map(todo => ( // returns a completely new array
      todo.id === id ? {...todo, completed} : todo // spread out old todo using ... operator. Replace with new completed value
    ))
    );
  }

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">
        Your TODOs
      </h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <div className="space-y-2">
          {
            todos.map((todo) => (
              <TodoListItem key={todo.id} todo={todo} onCompletedChange={setTodoCompleted}/>
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default App
