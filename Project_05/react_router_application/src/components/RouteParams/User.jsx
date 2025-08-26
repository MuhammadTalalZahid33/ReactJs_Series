import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <>
    <div className='bg-orange-500 flex justify-center items-center h-32 mb-9 '>
    <div className='text-4xl text-white'>User: {userid}</div>
    </div>
    </>
  )
}

export default User