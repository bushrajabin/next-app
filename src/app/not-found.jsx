import React from 'react'
import Link from 'next/link'

function notfound() {
  return (
    <div className='bg-slate-500 flex flex-col items-center text-center justify-center h-screen m-2'>
      <h2 className='text-4xl font-bold font-mono'>Page Not Found</h2>  
      <h3 className='text-xl p-2'>Go back to the <Link href="/" className='underline'>Home</Link></h3>
        </div>
  )
}

export default notfound