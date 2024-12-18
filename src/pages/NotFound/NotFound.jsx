import React from 'react'
import notFound from '../../assets/imgs/notfound.svg'
export default function NotFound() {
  return (
    //! Not found page that display img when you Type any path that not found in paths
    <div className='flex justify-center items-center'>
        <img src={notFound} className='w-[400px]' alt="notFound" />
    </div>
  )
}
