import User from '@/components/User'
import { UserType } from '@/types'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Users',
}

export default async function Users() {

  const users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

  return (
    <div className="container">
      <h1 className='text-3xl py-4 sm:text-4xl sm:py-8'>Users</h1>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-3 pb-8'>
        {users.map((user: UserType) => {
          return <User key={user.id} user={user}></User>
        })}
      </div>
    </div>
  )
}
