import Post from "@/components/Post"
import { PostType, TodosArrayType, TodoType } from "@/types"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "User Page",
}

export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`).then((res) =>
    res.json()
  )

  const userPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`).then((res) => res.json())

  const todos: TodosArrayType = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${params.id}`).then((res) => res.json())

  return (
    <div className="container">
      <h1 className="text-3xl pt-4 sm:text-4xl sm:pt-8">{user.name}</h1>
      <p className="py-4 sm:text-xl">{user.email}</p>
      <div className="info">
        <p>
          <strong>Company: </strong>
          {user.company.name}
        </p>
        <p>
          <strong>Website: </strong>
          {user.website}
        </p>
        <p>
          <strong>Address: </strong>
          {user.address.street} {user.address.suite} {user.address.city} {user.address.zipcode}
        </p>
      </div>

      <div className="posts my-4 sm:mt-8">
        <p className="font-black text-xl">Posts</p>
        <div className="posts-wrapper grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-3 py-4">
            {userPosts.map((post: PostType) => {
                return <Post key={post.id} post={post}></Post>
            })}
        </div>
      </div>

      <ul className="todos">
        <p className="font-black text-xl">Todos</p>
        {todos.map((todo: TodoType) => {
          return (
            <li key={todo.id} className={`${todo.completed && 'line-through'} list-disc ml-8`}>{todo.title}</li>
          )
        })}
      </ul>
    </div>
  )
}
