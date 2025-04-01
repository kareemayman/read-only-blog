import Link from 'next/link'
import React from 'react'

export default function User({ user }: { user: any }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-between">
      <h2 className="text-2xl truncate border-b border-b-gray-300 pb-2 capitalize tracking-tighter">
        {user.name}
      </h2>
      <p className="text-base capitalize tracking-tight py-2 ">
        {user.company.name}
        <br />
        {user.website}
        <br />
        {user.email}
      </p>
      <div className="wrapper border-t border-t-gray-300">
        <button className="text-white bg-blue-900 rounded-md p-2 mt-2 block ml-auto cursor-pointer transition hover:bg-blue-950">
          <Link href={`/users/${user.id}`}>View</Link>
        </button>
      </div>
    </div>
  )
}
