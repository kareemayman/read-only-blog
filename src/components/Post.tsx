import { PostType } from "@/types"
import Link from "next/link"
import React from "react"

export default function Post({ post, loading }: { post: PostType, loading?: boolean }) {
  if (loading) {
    return (
      <div className="bg-white rounded-md shadow-md flex flex-col justify-between min-w-[350px]">
        <div className="header-placeholder p-4 border-b border-b-gray-300">
          <div className="background bg-gray-100 w-full h-6 rounded-md"></div>
        </div>

        <div className="body-placeholder p-4 border-b border-b-gray-300">
          <div className="line bg-gray-100 w-full h-4 rounded-md mb-2"></div>
          <div className="line bg-gray-100 w-full h-4 rounded-md mb-2"></div>
          <div className="line bg-gray-100 w-full h-4 rounded-md mb-2"></div>
          <div className="line bg-gray-100 w-2/3 h-4 rounded-md"></div>
        </div>

        <div className="button-placeholder p-4">
          <div className="button bg-gray-100 w-14 h-10 rounded-md ml-auto"></div>
        </div>
      </div>
    )
  }

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
