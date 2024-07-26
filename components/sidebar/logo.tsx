import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <Link 
    href="/">
        <Image 
        height={100} 
        width={100}
        alt='logo'  
        src="/logo.svg" />
    </Link>
  )
}
