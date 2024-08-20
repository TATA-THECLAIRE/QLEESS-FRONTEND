'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const images = ['/laundry1.jpeg', '/laundry2.jpeg', '/laundry3.jpeg']

const Banner = () => {
   const [currentImage, setCurrentImage] = useState(0)

   useEffect(() => {
      const timer = setInterval(() => {
         setCurrentImage((prevImage) => (prevImage + 1) % images.length)
      }, 10000)

      return () => clearInterval(timer)
   }, [])

   const handlePrevClick = (e: React.MouseEvent) => {
      e.preventDefault()
      setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length)
   }

   const handleNextClick = (e: React.MouseEvent) => {
      e.preventDefault()
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
   }

   return (
      <div className="banner">
         {images.map((src, index) => (
            <Image
               key={src}
               src={src}
               alt={`Laundry Service ${index + 1}`}
               fill
               className={`banner-image ${index === currentImage ? 'active' : ''}`}
               priority={index === 0}
            />
         ))}
         <div className="banner-overlay">
            <h1>LAUNDRY & DRY CLEANING</h1>
            <h2>Best For Laundry Services</h2>
            <Link href="#" className="cta-button">Learn More</Link>
         </div>
         <Link href="#" className="slider-arrow left" onClick={handlePrevClick}>&lt;</Link>
         <Link href="#" className="slider-arrow right" onClick={handleNextClick}>&gt;</Link>
      </div>
   )
}

export default Banner