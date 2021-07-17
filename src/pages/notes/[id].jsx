import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()
  const {id} = router.query
  
  // const {params} = router.query
  // params === ['a','b','c']
  // route notes/[...params].jsx

  return(
    <div>
      Note page: {id}
    </div>
  )
}

export default Page