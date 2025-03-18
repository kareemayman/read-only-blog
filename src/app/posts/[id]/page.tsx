import Comment from "@/components/Comment"
import { Metadata } from "next"
import React from "react"

type Comment = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export const metadata: Metadata = {
  title: 'Post',
}

export default async function Page({ params }: { params: { id: string } }) {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  ).then((res) => res.json())

  const user: string | null = await fetch(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`
  )
    .then((res) => res.json())
    .then((user) => user.name)

  const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`).then((res) => res.json())

  return (
    <div className="container">
      <h1 className="text-3xl pt-4 sm:text-4xl sm:pt-8">{post.title}</h1>
      <p className="text-base sm:text-2xl pt-3">By: {user}</p>
      <p className="text-base sm:text-xl pt-3">{post.body}</p>
      <h2 className="text-base sm:text-2xl font-bold pt-5">Comments</h2>
      
      {comments.map((comment: Comment) => (
        <Comment key={comment.id} email={comment.email} body={comment.body}></Comment>
      ))}
    </div>
  )
}
