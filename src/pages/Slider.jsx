import { Carousel } from 'flowbite-react'
import React from 'react'
import carosel1 from '../images/carosale1.jpg'
import carosel2 from '../images/carosale2.jpg'
import carosel3 from '../images/carosale3.jpg'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Grid } from '@mui/material'

export const Slider = () => {
  return (
    <div>
      <div className="text-start">
      <Carousel className='md:h-[480px] sm:h-[600px] 2xl:h-[600px] cursor-none rounded-none' leftControl="." rightControl=".">
        <div className="relative object-cover">
          <img className='w-full h-full ' src={carosel1} alt="" />
          <div className='absolute mt-32 md:ml-28 md:mt-52 ml-10 inset-0 flex flex-col justify-center text-white z-20'>
            <h1 className='md:text-4xl text-2xl font-bold text-start'>MAKE BELIEVE</h1>
            <p className='mt-2 flex items-center md:w-full'>
              Sales on selected SONY products 
              <span className='ml-2'>
                <Grid container sx={{ color: 'tomato' }}>
                  <ArrowForwardOutlinedIcon />
                </Grid>
              </span>
            </p>
          </div>
        </div>
        <div className="relative  object-cover">
          <img className='w-full h-fit object-cover' src={carosel3} alt="" />
          <div className='absolute mt-32 md:ml-28 md:mt-52 ml-10 inset-0 flex flex-col justify-center text-white z-20'>
            <h1 className='md:text-4xl text-2xl font-bold text-start'>MAKE BELIEVE</h1>
            <p className='mt-2 flex items-center md:w-full'>
              Sales on selected SONY products 
              <span className='ml-2'>
                <Grid container sx={{ color: 'tomato' }}>
                  <ArrowForwardOutlinedIcon />
                </Grid>
              </span>
            </p>
          </div>
        </div>
        <div className="relative">
          <img className='w-full h-full ' src={carosel2} alt="" />
          <div className='absolute mt-32 md:ml-28 md:mt-52 ml-10 inset-0 flex flex-col justify-center text-white z-20'>
            <h1 className='md:text-4xl text-2xl font-bold text-start'>MAKE BELIEVE</h1>
            <p className='mt-2 flex items-center md:w-full'>
              Sales on selected SONY products 
              <span className='ml-2'>
                <Grid container sx={{ color: 'tomato' }}>
                  <ArrowForwardOutlinedIcon />
                </Grid>
              </span>
            </p>
          </div>
        </div>
      </Carousel>
    </div>
    </div>

  )
}
