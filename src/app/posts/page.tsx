import Post from '@/components/Post'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Posts',
}

export default async function Posts() {

  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

  return (
    <div className="container">
      <h1 className='text-3xl py-4 sm:text-4xl sm:py-8'>Posts</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-3 pb-8">
        {posts.map((post: any) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  )
}
