import React from 'react'
import BannerSlider from './BannerSlider'

const Banner = () => {
  return (
    <section className='container pt-[50px]'>
        <h1 className='font-darkGrotesque font-bold text-4xl leading-tight mt-[114px] mb-[32px]'>Everything your home deserves</h1>
        
        <BannerSlider />

    </section>
  )
}

export default Banner