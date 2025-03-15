import Comment from "@/components/Comment"
import React from "react"

export default function Loading() {
  return (
    <div className="container">
      <div className="title-placeholder bg-[#d8d9db] rounded-md w-3/4 h-8 mt-4 sm:mt-8"></div>
      <p className="text-base sm:text-2xl pt-3">
        By:{" "}
        <span className="inline-block rounded-md bg-[#d8d9db] w-1/2 h-6"></span>
      </p>

      <div className="post-placeholder">
        <div className="line bg-[#d8d9db] rounded-md mb-2 h-5 w-full"></div>
        <div className="line bg-[#d8d9db] rounded-md mb-2 h-5 w-full"></div>
        <div className="line bg-[#d8d9db] rounded-md mb-2 h-5 w-3/4"></div>
      </div>

      <h2 className="text-base sm:text-2xl font-bold pt-5">Comments</h2>

      <Comment loading={true}></Comment>
      <Comment loading={true}></Comment>
      <Comment loading={true}></Comment>
      <Comment loading={true}></Comment>
      <Comment loading={true}></Comment>
    </div>
  )
}
