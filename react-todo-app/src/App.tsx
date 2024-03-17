import { useState } from "react"
import { dummyData } from "./data/todos"
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(dummyData)

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) => 
    prevTodos.map(todo => ( // returns a completely new array
      todo.id === id ? {...todo, completed} : todo // spread out old todo using ... operator. Replace with new completed value
    ))
    );
  }

  function addTodo(title: string){
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: prevTodos.length + 1,
        title,
        completed: false
      },
    ]);
  }

  function deleteTodo(id: number){
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id))
  }
  
  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">
        Your TODOs
      </h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm onSubmit={addTodo}/>
        <TodoList todos={todos} onCompletedChange={setTodoCompleted} onDelete={deleteTodo}/>
      </div>
    </main>
  )
}

export default App
