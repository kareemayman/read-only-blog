import Comment from "@/components/Comment"
import { CommentsArrayType, CommentType, PostType, UserType } from "@/types"
import { Metadata } from "next"
import Link from "next/link"
import React from "react"

export const metadata: Metadata = {
  title: 'Post',
}

export default async function Page({ params }: { params: { id: string } }) {
  const post: PostType = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  ).then((res) => res.json())

  const user: UserType = await fetch(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`
  )
    .then((res) => res.json())

  const comments: CommentsArrayType = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`).then((res) => res.json())

  return (
    <div className="container">
      <h1 className="text-3xl pt-4 sm:text-4xl sm:pt-8">{post.title}</h1>
      <p className="text-base sm:text-2xl pt-3">By:
        <Link href={`/users/${post.userId}`} className="text-blue-950"> {user.name}</Link>
      </p>
      <p className="text-base sm:text-xl pt-3">{post.body}</p>
      <h2 className="text-base sm:text-2xl font-bold pt-5">Comments</h2>
      
      {comments.map((comment: CommentType) => (
        <Comment key={comment.id} email={comment.email} body={comment.body}></Comment>
      ))}
    </div>
  )
}
