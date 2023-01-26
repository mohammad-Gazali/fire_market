import { IconLinkType } from '@/mytypes'
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BsFillFilePersonFill } from 'react-icons/bs';
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';



const NavPersonal = ({ big }: { big: boolean }) => {
  return (
    <div className={ big ? "md:block hidden group relative" : "md:hidden block relative" } >
        <Image width="36" height="36" className={`rounded-full cursor-pointer`} alt="placeholder" src="/images/avatar-placeholder.png" />
        <ul className={`hidden absolute top-8 -right-2 bg-mylightblue shadow-xl rounded-lg w-40 gap-2 flex-col items-start p-3 ${big ? 'group-hover:flex' : '' }`}>
            <PersonlListItem icon={<BiLogIn />} name="Log In" href="/" />
            <PersonlListItem icon={<AiOutlineUserAdd />} name="Sign Up" href="/" />
            <PersonlListItem icon={<BiLogOut />} name="Log Out" href="/" />
            <PersonlListItem icon={<BsFillFilePersonFill />} name="Profile" href="/" />
        </ul>
    </div>
  )
}


const PersonlListItem = ({ href, name, icon }: IconLinkType) => {
    return (
        <Link className='flex justify-start items-center hover:bg-myyellow hover:text-black transition-all hover:pl-2 shadow-lg gap-2 px-1 py-2 w-full bg-white rounded-lg text-mydark' href={href}>
            <span className='text-2xl'>
                { icon } 
            </span>
            <span className='font-medium'>
                { name }
            </span>
        </Link>
    )
}

export default NavPersonal