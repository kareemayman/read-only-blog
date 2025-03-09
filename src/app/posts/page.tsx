import Post from '@/components/Post'
import React from 'react'

export default async function Posts() {

  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

  return (
    <div className="container">
      <h1 className='text-base py-8 sm:text-4xl'>Posts</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-3 pb-8">
        {posts.map((post: any) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  )
}
