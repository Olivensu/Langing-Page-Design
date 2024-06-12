import React from 'react'
import allgears from '../images/allgears.jpg'
import people3 from '../images/people3.jpg'
import people1 from '../images/people1.jpg'
import people2 from '../images/people2.jpg'
import editing from '../images/Rectangle21.png'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import CheckIcon from '@mui/icons-material/Check';
import { Grid } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const Section4 = () => {
  return (
    <div className='text-start mx-5 md:mx-24 my-10 '>
        <h1 className='text-3xl font-bold'>Featured savings</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 my-2 gap-4  '>
            
            <div className="">
                <img className='w-full' src={allgears} alt="" />
            </div>
            <div className="text-start ">
                <h1 className='text-2xl mt-[-8px] font-semibold'>Turn used gear into new possibilities</h1>
                <p className='text-sm my-2'>We offer a reliable platform for buying and selling used photography gear. Whether you're a beginner looking for affordable equipment or a professional photographer in search of high-end gear at a discounted price, we've got you covered. </p>
                <p className=' font-semibold text-xl my-2 mt-2'>Top sellers this month </p>
                
                <div className='grid grid-cols-1  md:grid-cols-3 gap-2'>
                    <div>
                        <div className='grid grid-cols-6 gap-2 mt-1'>
                            <img className='w-full col-span-2 h-24' src={people3} alt="" />
                            <div className='col-span-4'>
                                <div>
                                    <h1 className='mt-[-5px] '>Tom Smith</h1>
                                    <p className='text-xs my-2'>Handmade Accessories</p>
                                    <div className='flex items-center w-full'>
                                        <div className='w-6'>
                                        <Grid container sx={{ color: 'tomato' }}>
                                                <CheckIcon fontSize="small" />
                                        </Grid>
                                        </div>
                                        <p className=' text-gray-400 text-xs'>PIXEL Verified </p>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        <ul className='grid grid-cols-2 md:grid-cols-1 text-gray-400 text-xs list-disc ml-5 my-2'>
                                    <li>Camera Bags</li>
                                    <li>Grips & Rigs</li>
                                    <li>f/2.8 to f/11</li>
                        </ul>
                    </div>
                    <div>
                        <div className='grid grid-cols-6 gap-2 mt-1'>
                            <img className='w-full col-span-2 h-24' src={people1} alt="" />
                            <div className='col-span-4'>
                                <h1 className=' mt-[-5px] '>George Duke</h1>
                                <p className='text-xs my-2'>Handmade Accessories</p>
                                <div className='flex items-center w-full'>
                                    <div className='w-6'>
                                    <Grid container sx={{ color: 'tomato' }}>
                                            <CheckIcon fontSize="small" />
                                    </Grid>
                                    </div>
                                    <p className=' text-gray-400 text-xs'>PIXEL Verified </p>
                                </div>
                                
                            </div>
                            
                        </div>
                        <ul className='grid grid-cols-2 md:grid-cols-1 text-gray-400 text-xs list-disc ml-5 my-2'>
                                    <li>Camera Bags</li>
                                    <li>Grips & Rigs</li>
                                    <li>f/2.8 to f/11</li>
                                    <li>f/2.8 to f/11</li>
                        </ul>
                    </div>
                    <div>
                        <div className='grid grid-cols-6 gap-2 mt-1'>
                            <img className='w-full col-span-2 h-24' src={people2} alt="" />
                            <div className='col-span-4'>
                                <h1 className=' mt-[-5px]'>Emily Wong</h1>
                                <p className='text-xs my-2'>Optics Enthusiast</p>
                                <div className='flex items-center w-full'>
                                    <div className='w-6'>
                                    <Grid container sx={{ color: 'tomato' }}>
                                            <CheckIcon fontSize="small" />
                                    </Grid>
                                    </div>
                                    <p className=' text-gray-400 text-xs'>PIXEL Verified </p>
                                </div>
                                
                            </div>
                            
                        </div>
                        <ul className='grid grid-cols-2 md:grid-cols-1 text-gray-400 text-xs list-disc ml-5 my-2'>
                                    <li>Camera Bags</li>
                                    <li>Grips & Rigs</li>
                                    <li>f/2.8 to f/11</li>
                        </ul>
                    </div>
                    
                </div>
                <div className='mx-auto'>
                    <button className='px-8 py-1 btn border-2 border-red-500 bg-red-500 hover:bg-red-700 text-white'>BUY</button>
                    <button className='px-8 py-1 btn ml-5 border-2 border-red-500 text-black  outline-2  outline-red-500 hover:bg-red-500 hover:text-white'>SELL</button>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}
