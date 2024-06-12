import React, { useState } from 'react'
import dron from '../images/Rectangle15(1).png'
import { Grid } from '@mui/material'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import StarIcon from '@mui/icons-material/Star';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export const Section3Grid3 = () => {
  return (
    <div>
        <div className='mx-3'>
            <img className='w-full' src={dron} alt="" />
            <div className='flex justify-between items-center'>
                <span className='text-xl'>Mavic 3</span>
                <span className='flex  items-center w-12'>
                    <Grid container sx={{ color: 'tomato' }}>
                        <StarIcon fontSize="small" />
                    </Grid>
                    <span className=' text-gray-400'>4.7</span>
                </span>
            </div>
            <p className=''>DJI</p>
            <ul className=' text-gray-400 text-xs list-disc ml-5'>
                <li>20MP 4/3" CMOS Hasselblad</li>
                <li>Sensor-Shift Image Stabilization</li>
                <li>f/2.8 to f/11 Adjustable Aperture</li>
                <li>8K30 Raw Video</li>
            </ul>

            <div className='flex justify-between items-center my-2'>
                <div className='flex justify-between  items-center'>
                    <p className='w-6'><Grid container sx={{ color: 'tomato' }}>
                        <AccessAlarmIcon fontSize="small" />
                    </Grid></p>
                    <p className=' text-gray-400'>21h 3m</p>
                </div>
                <div>
                <p className='line-through text-gray-400'>$ 1,999</p>
                <p>$ 1,599</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}
