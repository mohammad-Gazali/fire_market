import { IconLinkType } from '@/mytypes'
import Link from 'next/link'
import React from 'react'

const NavLinkSmallDevice = ({ icon, name, href }: IconLinkType) => {
  return (
    <Link href={href} className="text-lg bg-myorange rounded-full px-4 flex items-center gap-2 py-2 font-medium hover:shadow-2xl shadow-xl hover:ring-2 text-white ring-white transition-all">
      <div className='text-xl'>
        {icon}
      </div> 
      {name}
    </Link>
  )
}

export default NavLinkSmallDevice