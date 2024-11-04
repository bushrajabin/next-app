import React from 'react'
import Link from 'next/link'

function notfound() {
  return (
    <div>
      <h2>Page Not Found</h2>  
      <h3>Go back to the <Link href="/">Home</Link></h3>
        </div>
  )
}

export default notfound