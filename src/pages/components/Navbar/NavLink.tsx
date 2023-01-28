import React from 'react'
import Link from 'next/link';
import { LinkType } from 'mytypes';


const NavLink = ({ href, name }: LinkType) => {
  return (
    <Link href={href} className="text-lg font-medium text-white hover:text-myyellow hover:scale-110 transition-all">
        {name}
    </Link>
  )
}

export default NavLink