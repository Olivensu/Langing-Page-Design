import React, { useState } from 'react'
import camera from '../images/Rectangle15(2).png'
import { Grid } from '@mui/material'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import StarIcon from '@mui/icons-material/Star';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export const Section3Grid2 = () => {
  return (
    <div>
        <div className='mx-3'>
            <img className='w-full' src={camera} alt="" />
            <div className='flex justify-between items-center'>
                <span className='text-xl'>EOS R5</span>
                <span className='flex  items-center w-12'>
                    <Grid container sx={{ color: 'tomato' }}>
                        <StarIcon fontSize="small" />
                    </Grid>
                    <span className=' text-gray-400'>4.8</span>
                </span>
            </div>
            <p className=''>Canon</p>
            <ul className=' text-gray-400 text-xs list-disc ml-5'>
                <li>45MP Full-Frame CMOS Sensor</li>
                <li>Sensor-Shift Image Stabilization</li>
                <li>DIGIC X Image Processor</li>
                <li>8K30 Raw Video</li>
            </ul>

            <div className='flex justify-between items-center my-2'>
                <div className='flex justify-between  items-center'>
                    <p className='w-6'><Grid container sx={{ color: 'tomato' }}>
                        <AccessAlarmIcon fontSize="small" />
                    </Grid></p>
                    <p className=' text-gray-400'>2h 27m</p>
                </div>
                <div>
                <p className='line-through text-gray-400'>$ 3,899</p>
                <p>$ 3,699</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}
