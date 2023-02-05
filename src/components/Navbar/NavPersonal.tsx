import { IconLinkType } from 'mytypes'
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BsFillFilePersonFill } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5'
import Image from 'next/image'
import React, { useRef } from 'react'
import Link from 'next/link';



const NavPersonal = ({ big }: { big: boolean }) => {

    const personalList = useRef<HTMLUListElement>(null)

    const handleClickOpen = () => {
        personalList.current?.classList.toggle('hidden')    
    }

    const handleClickClose = () => {
        personalList.current?.classList.add('hidden')
    }

  return (
    <div className={ big ? "md:block hidden group relative" : "md:hidden block relative" } >
        <Image width="36" height="36" className={`rounded-full cursor-pointer`} alt="placeholder" src="/images/avatar-placeholder.png" onClick={handleClickOpen} />
        <ul ref={personalList} className={`hidden absolute top-8 ${big ? "-right-2" : "left-3 pt-3" } bg-mylightblue shadow-xl rounded-lg w-40 flex-col items-start px-3 pb-3 ${big ? 'group-hover:flex' : '' }`}>
            {big ? null : <div className='bg-white text-mydark w-fit p-2 rounded-full text-xl cursor-pointer hover:bg-myyellow hover:text-black hover:rotate-180 transition-all' onClick={handleClickClose}>
                <IoClose />
            </div> }
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
        <Link className='flex justify-start items-center hover:bg-myyellow hover:text-black transition-all hover:pl-2 shadow-lg gap-2 px-1 py-2 mt-2 w-full bg-white rounded-lg text-mydark' href={href}>
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