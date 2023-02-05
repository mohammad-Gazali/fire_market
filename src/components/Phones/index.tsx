import { PhoneType } from 'mytypes'
import React from 'react'
import Phone from './Phone'

const Phones = ({ phones }: { phones: PhoneType[] }) => {

  return (
    <ul className='flex flex-wrap justify-center gap-5 mypadx py-10'>
      {phones.map(phone => <Phone key={phone.id} phone={phone} />)}
    </ul>
  )
}



export default Phones