import { TodosArrayType, TodoType } from "@/types"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Todos",
  description: "Todos page",
}

export default async function Todos() {
  const todos: TodosArrayType = await fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  )

  return (
    <div className="container">
      <h1 className="text-3xl py-4 sm:text-4xl sm:py-8">Todos</h1>
      <ul>
        {todos.map((todo: TodoType) => {
          return (
            <li key={todo.id} className={`${todo.completed && "line-through"} list-disc ml-8`}>
              {todo.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
