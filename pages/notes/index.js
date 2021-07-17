import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Notes = () => {

  const id = 2
  const router = useRouter()

  return(
    <div>
      <p>Notes index</p>

      <h2>Links</h2>
      <Link href="/notes/[id].js" as={`/notes/${id}`}>
        <a>user</a>
      </Link>

      <h2>Button</h2>
      <button onClick={e => router.push('/')}>
        Go Home
      </button>

    </div>
  )
}

export default Notes