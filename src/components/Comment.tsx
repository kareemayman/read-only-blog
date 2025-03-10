import React from 'react'

export default function Comment({ email, body }: { email: string, body: string }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm my-3">
          <h3 className="text-base sm:text-xs text-gray-700">{email}</h3>
          <p className="text-base sm:text-lg mt-2 font-extralight">{body}</p>
    </div>
  )
}
