import React from 'react'
import Link from 'next/link'
import { NavLogoType } from 'mytypes'



const NavLogo = ({ icon, name }: NavLogoType) => {
  return (
    <Link href='/' className='flex justify-center items-center w-fit gap-3 cursor-pointer'>
        <span className='text-3xl text-myorange'>
            {icon}
        </span>
        <span className='font-bold text-white tracking-wide md:text-xl text-lg uppercase'>
            {name}
        </span>
    </Link>
  )
}

export default NavLogo