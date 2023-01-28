import { PhoneType } from 'mytypes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiDetail } from 'react-icons/bi'
import { BsCart } from 'react-icons/bs'

const Phone = ({ phone }: { phone: PhoneType }) => {
  return (
    <li className='text-base w-96 bg-myblue text-white shadow-lg rounded-lg flex p-6 flex-col items-center'>
        <div className='flex w-full justify-between'>
            <Image width="200" className='h-40 w-40 object-cover rounded-lg' height="200" priority={false} src={phone.image} alt={`phone with id ${phone.id}`} />
            <div className='w-full pl-4'>
                <h5 className='mt-3 font-bold truncate mb-3'>
                    {phone.name}
                </h5>
                <p className='flex-1 max-h-[4.5rem] overflow-hidden overflow-ellipsis font-light'>
                    {phone.description}
                </p><span className='font-bold tracking-[0.2rem]'>.......</span>
            </div>
        </div>
        <hr className='border-myyellow/60 shadow-xl my-3 h-[1px] w-full' />
        <ul className='flex flex-col w-full gap-3'>
            <PhoneDetail detail='color' value={phone.details.color} />
            <PhoneDetail detail='os' value={phone.details.os} />
            <PhoneDetail detail='storage' value={phone.details.storage} />
        </ul>
        <hr className='border-myyellow/60 shadow-xl my-3 h-[1px] w-full' />
        <div className='flex gap-2'>
            <Link className='btni-myyellow w-44' href="/">
                <BiDetail /> details
            </Link>
            <Link className='btni-myyellow w-44' href="/">
                <BsCart /> add to cart
            </Link>
        </div>
    </li>
  )
}


const PhoneDetail = ({ detail, value }: { detail: string, value: string }) => {
    return (
        <li className='bg-mydark/30 flex justify-between pr-1 pl-2 py-2 rounded-lg shadow-lg'>
            <span className='font-semibold'>
                {detail}:
            </span>{" "}
            <span className=''>
                { value }
            </span>
        </li>
    )
}

export default Phone