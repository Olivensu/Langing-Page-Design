import React, { useState } from 'react'
import lense from '../images/Rectangle5.png'
import { Grid } from '@mui/material'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import StarIcon from '@mui/icons-material/Star';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Section3Grid2 } from './Section3Grid2';
import { Section3Grid3 } from './Section3Grid3';
import { Section3Grid4 } from './Section3Grid4';
import { Section3Grid5 } from './Section3Grid5';

export const Section3 = () => {
    const [selected, setSelected] = useState('1Len');
    const [count, setCount] = useState(0);
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 md:divide-x-2 text-start mx-5 md:mx-24 my-12 w-auto'>
        <div className='mx-3'>
            <img className='w-full' src={lense} alt="" />
            <div className='flex justify-between items-center my-2'>
                <span className='text-xl'>2 Lens kit</span>
                <span className='flex  items-center w-12'>
                    <Grid container sx={{ color: 'tomato' }}>
                        <StarIcon fontSize="small" />
                    </Grid>
                    <span className=' text-gray-400'>4.8</span>
                </span>
            </div>
            <p className='mt-[-4px]'>Canon</p>

            <div className="flex border border-gray-300 my-3 rounded-full overflow-hidden">
                <div className={`flex-1 text-center rounded-full py-1 cursor-pointer transition-colors duration-300 ${
                    selected === '1Len' ? 'bg-red-500 text-white' : 'bg-white text-black'
                    }`}
                    onClick={() => setSelected('1Len')}
                >
                    1 Len
                </div>
                <div
                    className={`flex-1 text-center rounded-full py-1 cursor-pointer transition-colors duration-300 ${
                    selected === '2LensKit' ? 'bg-red-500 text-white' : 'bg-white text-black'
                    }`}
                    onClick={() => setSelected('2LensKit')}
                >
                    2 Lens kit
                </div>
            </div>


            <div className="grid grid-cols-5 border border-gray-300 my-3 rounded-full overflow-hidden">
                <div className='flex-1 text-center  py-1 cursor-pointer bg-red-500'
                    onClick={() => setCount(count-1)}
                >
                    -
                </div>
                <div
                    className='flex-1 col-span-3 text-center py-1 cursor-pointer transition-colors duration-300'>
                    {count}
                </div>
                <div  className='flex-1 text-center  py-1 cursor-pointer bg-red-500'
                    onClick={() => setCount(count+1)}
                >
                    +
                </div>
            </div>
            <div className='flex justify-between items-center my-2'>
                <div className='flex justify-between  items-center'>
                    <p className='w-6'><Grid container sx={{ color: 'tomato' }}>
                        <AccessAlarmIcon fontSize="small" />
                    </Grid></p>
                    <p className=' text-gray-400'>17h 31m</p>
                </div>
                <p>$ 1,799</p>
                
            </div>
        </div>
        <div><Section3Grid2></Section3Grid2></div>
        <div className=' hidden md:block'><Section3Grid3></Section3Grid3></div>
        <div className=' hidden md:block'><Section3Grid4></Section3Grid4></div>
        <div className=' hidden md:block'><Section3Grid5></Section3Grid5></div>
    </div>
  )
}
