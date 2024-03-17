import { useEffect, useState } from "react";
import { dummyData } from "../data/todos";
import { Todo } from "../types/todo";

export default function useTodos(){
    const [todos, setTodos] = useState(() => {
        const savedTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
        return savedTodos.length > 0 ? savedTodos : dummyData 
      })
    
      // Use Effects
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos)) // turns into a string and save to local storage. LocalStorage only stores strings
      }, [todos]) // This function will be called whenever todos has changed its state
    
    
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
            id: Date.now(),
            title,
            completed: false
          },
        ]);
      }
    
      function deleteTodo(id: number){
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id))
      }
    
      function deleteAllCompletedTodos () {
        setTodos((prevTodos) => prevTodos.filter(todo => !todo.completed))
      }

      return {
        todos,
        setTodoCompleted,
        addTodo,
        deleteTodo,
        deleteAllCompletedTodos,
      };
      
}