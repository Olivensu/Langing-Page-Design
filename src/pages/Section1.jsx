import React from 'react'
import camera from '../images/Rectangle8.png'
import lense from '../images/Rectangle14.png'
import bag from '../images/Rectangle15(3).png'
import studio from '../images/studio.png'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Grid } from '@mui/material'

export const Section1 = () => {
  return (
    <div className=''>
        <div className='grid grid-cols-2 md:grid-cols-3 mx-5 md:mx-24 gap-4 my-10 w-auto'>
            <div className="relative hover:brightness-125 group ">
                <img className='' src={camera} alt="" />
                <div className='flex justify-between items-center mt-1'>
                    <div className='md:absolute md:ml-5 md:mt-52 inset-0 flex flex-col justify-start text-white z-20'>
                        <h1 className='text-2xl text-start text-black md:text-white'>Cameras</h1>
                        <p className='text-start mt-2 md:w-full text-xs text-gray-300 hidden md:block'>
                        Browse through our selection of cameras 
                        </p>
                    </div>
                    <div className='md:absolute md:ml-60   md:mt-48 inset-[54px] transform transition-transform duration-300 md:group-hover:translate-x-8'>
                            <Grid container sx={{ color: 'tomato' }}>
                            <ArrowForwardOutlinedIcon  />
                            </Grid>
                    </div>
                </div>
            </div>
            <div className="relative hover:brightness-125 group ">
                <img className='' src={lense} alt="" />
                <div className='flex justify-between items-center mt-1'>
                    <div className='md:absolute md:ml-5 md:mt-52 inset-0 flex flex-col justify-start text-white z-20'>
                        <h1 className='text-2xl text-start text-black md:text-white'>Lenses</h1>
                        <p className='text-start mt-2 md:w-full text-xs text-gray-300 hidden md:block'>
                        Find the sharpest lens for your photoshoot
                        </p>
                    </div>
                    <div className='md:absolute md:ml-60   md:mt-48 inset-[54px] transform transition-transform duration-300 md:group-hover:translate-x-8'>
                            <Grid container sx={{ color: 'tomato' }}>
                            <ArrowForwardOutlinedIcon  />
                            </Grid>
                    </div>
                </div>
            </div>
            <div className="relative hover:brightness-125 group ">
                <img className='' src={bag} alt="" />
                <div className='flex justify-between items-center mt-1'>
                    <div className='md:absolute md:ml-5 md:mt-52 inset-0 flex flex-col justify-start text-white z-20'>
                        <h1 className='text-2xl text-start text-black md:text-white'>Accessories</h1>
                        <p className='text-start mt-2 md:w-full text-xs text-gray-300 hidden md:block'>
                        Highest quality accessories to fit your gear 
                        </p>
                    </div>
                    <div className='md:absolute md:ml-60   md:mt-48 inset-[54px] transform transition-transform duration-300 md:group-hover:translate-x-8'>
                            <Grid container sx={{ color: 'tomato' }}>
                            <ArrowForwardOutlinedIcon  />
                            </Grid>
                    </div>
                </div>
            </div>
            <div className="relative hover:brightness-125 group block md:hidden">
                <img className='w-full' src={camera} alt="" />
                <div className='flex justify-between items-center mt-1'>
                    <div className='md:absolute md:ml-5 md:mt-52 inset-0 flex flex-col justify-start text-white z-20'>
                        <h1 className='text-2xl text-start text-black md:text-white'>Studio</h1>
                        <p className='text-start mt-2 md:w-full text-xs text-gray-300 hidden md:block'>
                        Highest quality accessories to fit your gear 
                        </p>
                    </div>
                    <div className='md:absolute md:ml-60   md:mt-48 inset-[54px] transform transition-transform duration-300 md:group-hover:translate-x-8'>
                            <Grid container sx={{ color: 'tomato' }}>
                            <ArrowForwardOutlinedIcon  />
                            </Grid>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
