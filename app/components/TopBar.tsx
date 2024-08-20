import React from 'react'
import Link from 'next/link'

const TopBar = () => {
   return (
      <div className="top-bar">
         <Link href="#">FAQs</Link>
         <Link href="#">Help</Link>
         <Link href="#">Support</Link>
         <div className="social-icons">
            <Link href="#">F</Link>
            <Link href="#">T</Link>
            <Link href="#">In</Link>
            <Link href="#">Ig</Link>
            <Link href="#">Yt</Link>
         </div>
      </div>
   )
}

export default TopBar