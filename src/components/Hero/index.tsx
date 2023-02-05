import Image from 'next/image'
import React from 'react'
import { AiFillFire } from 'react-icons/ai'
import { Oswald } from '@next/font/google'

const oswald = Oswald({
  weight: ["400", "500", "700"],
  subsets: ["latin"]
})

const Hero = () => {
  return (
    <section className='flex flex-wrap justify-between wrap-content shadow-xl myp pb-0 gep-2 bg__gradient'>
      <div className='flex  flex-col justify-center content text-white text-4xl leading-loose'>
          <p className='text-7xl font-bold text__gradient'>Fire Market</p> 
          <p className={oswald.className} style={{ fontWeight: 400 }}>Best Ecommerce Site For Phones</p>
          <p className='text-xl md:text-start mt-3 font-medium'>
            Top brands, deals, and latest features
          </p>
          <button className="btni-mydark mt-10 w-fit">
            <AiFillFire className='text-xl' /> Get Started
          </button>
      </div>
      <Image priority width="400" height="400" className='hero-image' src="/images/hero.png" alt="phone hero section" />
    </section>
  )
}


export default Hero