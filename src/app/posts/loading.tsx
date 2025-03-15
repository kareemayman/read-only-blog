import Post from '@/components/Post'
import { title } from 'process'
import React from 'react'

export default function Loading() {

  return (
    <div className="container">
      <h1 className='text-3xl py-4 sm:text-4xl sm:py-8'>Posts</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-3 pb-8">
        <Post loading={true}></Post>
        <Post loading={true}></Post>
        <Post loading={true}></Post>
        <Post loading={true}></Post>
        <Post loading={true}></Post>
        <Post loading={true}></Post>
        <Post loading={true}></Post>
        <Post loading={true}></Post>
        <Post loading={true}></Post>
        <Post loading={true}></Post>
        <Post loading={true}></Post>
        <Post loading={true}></Post>
      </div>
    </div>
  )
}
