import React from 'react'
import Link from 'next/link'

const MainNav = () => {
   return (
      <nav className="main-nav">
         <Link href="/" className="logo">DRYME</Link>
         <div className="menu-items">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Services</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Pages</Link>
            <Link href="#">Contact</Link>
         </div>
      </nav>
   )
}

export default MainNav