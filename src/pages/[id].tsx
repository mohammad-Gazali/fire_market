import { PhoneType } from 'mytypes'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import React from 'react'
import { BsCart } from 'react-icons/bs'

const Detail = ({ phone }: { phone: PhoneType }) => {
  return (
    <main className="bg-myblue flex px-7 py-10 justify-center flex-wrap gap-5">
        <div className="flex flex-col gap-5 sm:w-auto w-full">
            <h2 className="sm:text-3xl text-2xl text-center font-bold text-white bg__gradient_2 rounded-lg p-4 whitespace-nowrap shadow-lg">
                {phone.name}
            </h2>
            <Image width={150} height={150} src={phone.image} alt={phone.name} className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
        <div className='flex flex-col'>
            <div className='pb-5 px-3 pt-3 bg-mylightblue rounded-lg shadow-lg'>
                <p className='text-xl sm:text-2xl bg-mydark py-2 text-white font-extrabold text-center rounded-lg mb-3 shadow-lg'>
                    Details
                </p>
                <ul className='text-lg sm:text-xl font-semibold flex sm:gap-5 gap-3'>
                    <li className='bg-myorange shadow-lg text-white px-6 py-2 rounded-lg flex-1 text-center'>{phone.details.color}</li>
                    <li className='bg-myorange shadow-lg text-white px-6 py-2 rounded-lg flex-1 text-center'>{phone.details.os}</li>
                    <li className='bg-myorange shadow-lg text-white px-6 py-2 rounded-lg flex-1 text-center'>{phone.details.storage}</li>
                </ul>
            </div>
            <p className="bg-mylightblue shadow-lg rounded-lg mt-5 text-xl p-3 font-medium max-w-[600px] leading-9">
                {phone.description}
            </p>
            <div className='h-full sm:max-h-20  mt-5 flex flex-wrap gap-5'>
                <div className='bg-white flex-1 p-2 flex justify-center items-center gap-3 text-xl font-medium rounded-lg shadow-lg'>
                    Price:
                    <p className='text-myorange font-sans text-3xl font-bold mb-1'>{phone.price}$</p>
                </div>
                <button className='flex-1 btni-myyellow shadow-lg text-xl whitespace-nowrap'>
                    <BsCart />Add to Cart
                </button>
            </div>
        </div>
    </main>
  )
}

export default Detail


export const getStaticProps: GetStaticProps = async (context) => {
    
    const {id} = context.params as { id: string }

    const response = await fetch(`${process.env.HOST}/${id}`)

    const phone: PhoneType = await response.json()   

    return {
        props: {
            phone
        }
    }
}


export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`${process.env.HOST}`)
    
    const data: PhoneType[] = await response.json()

    const paths = data.map((phone) => ({
        params: {
            id: phone.id.toString()
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}