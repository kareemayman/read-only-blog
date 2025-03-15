import React from 'react'

export default function Comment({ email, body, loading }: { email?: string, body?: string, loading?: boolean }) {

  if (loading) {
    return (
      <div className="bg-white p-4 rounded-md shadow-sm my-3">
          <div className="rounded-md bg-gray-100 w-1/5 h-4"></div>
          <div className="line rounded-md bg-gray-100 w-full h-5 mt-3"></div>
          <div className="line rounded-md bg-gray-100 w-3/4 h-5 mt-3"></div>
      </div>
    )
  }

  return (
    <div className="bg-white p-4 rounded-md shadow-sm my-3">
          <h3 className="text-base sm:text-xs text-gray-700">{email}</h3>
          <p className="text-base sm:text-lg mt-2 font-extralight">{body}</p>
    </div>
  )
}
