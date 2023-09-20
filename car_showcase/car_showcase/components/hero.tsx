"use client";

import React from 'react';
import Image from 'next/image';
import { CustomButton } from '.';

const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <>
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>Unlock your journey with premium car rentals!</h1>
            <p className='hero__subtitle'>Explore the world behind the wheel of your dream car.</p>
            <CustomButton 
                title="Explore Cars"
                containerStyles = "bg-primary-blue text-white rounded-full mt-10"
                handleClick = {() => {handleScroll}}
            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src="/hero.png" alt='hero' fill className="object-contain" />
                <div className='hero__image-overlay'></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero