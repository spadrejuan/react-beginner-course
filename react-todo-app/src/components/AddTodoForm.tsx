import { useState } from "react"

interface AddTodoFormProps{
    onSubmit: (title: string) => void
}
export default function AddTodoForm({onSubmit}: AddTodoFormProps){
    // Making input field a controlled input
    const[input, setInput] = useState("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // When submitting an HTML, it will get a POST request and 
        //refresh the page. This enables JavaScript to handle the Form
        if (!input.trim()) return;

        onSubmit(input);
        setInput("");
    }
    return (
        <form onSubmit={handleSubmit} className="flex">
            <input type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)} 
            placeholder="What needs to be done?"
            className="rounded-s-md grow border border-gray-400 p-2"
            />
            <button type="submit" className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800">
                Add
            </button>
        </form>
    )

}