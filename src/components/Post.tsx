import Link from "next/link"
import React from "react"

export default function Post({ post }: { post: any }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-between">
      <h2 className="text-2xl truncate border-b border-b-gray-300 pb-2 capitalize tracking-tighter">
        {post.title}
      </h2>
      <p className="text-base capitalize tracking-tight py-2 ">{post.body}</p>
      <div className="wrapper border-t border-t-gray-300">
        <button className="text-white bg-blue-900 rounded-md p-2 mt-2 block ml-auto cursor-pointer transition hover:bg-blue-950">
          <Link href={`/posts/${post.id}`}>View</Link>
        </button>
      </div>
    </div>
  )
}
